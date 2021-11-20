import {
    FunctionComponent,
    useEffect
} from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FaSave } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineReload } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import MetaDataDetailStyle from './style';
import InputDebounce from "views/components/base/InputDebounce";
import Radio, { RadioOption } from 'views/components/base/Radio';
import Switch from 'views/components/base/Switch';
import SelectInputTypes from 'views/components/layout/SelectInputTypes';
import TableApi from '../TableApi';
import TableHistorySystem from '../TableHistorySystem';
import { ITemplateFields } from 'types/models/TemplateFields';
import {
    getDataSourceTemplate,
    isFetchingDataSourceTemplate,
    isFetchedDataSourceTemplate,
    fetchDataSourceTemplate
} from 'features/data-source-template/store/slice';

interface IMetaDataDetailProps {
    field?: ITemplateFields;
}

const MetaDataDetail: FunctionComponent<IMetaDataDetailProps> = (props) =>{
    const { field } = props;
    const classes = MetaDataDetailStyle();
    const { t } = useTranslation();

    const labelsName = t("Common.Labels");
    const labelDefaultValue = t("Common.DefaultValue");
    const labelInputType = t("Pages.Metadata.Type.Header");
    const labelKeyApi = t("Common.KetApi");
    const labelRequired = t("Common.Require");
    const labelValue = t('Pages.Layout.EForm.TSource.Value');

    const optionRequire:RadioOption[] = [
        {
          label:'Nhập tay',
          value: "0"
        },
        {
          label:'Lấy từ API',
          value: "1" 
        }
    ];

    const dispatch = useDispatch();
    const dataSourceTemplate = useSelector(getDataSourceTemplate);
    const isFetching = useSelector(isFetchingDataSourceTemplate);
    const isFetched = useSelector(isFetchedDataSourceTemplate);

    useEffect(() => {
        !dataSourceTemplate.length &&
        !isFetching &&
        !isFetched &&
        field?.template_data_source_api_id &&
        dispatch(fetchDataSourceTemplate(field?.template_data_source_api_id));
    });

    return (
        <Grid container className={clsx("mb-2", classes.root)} spacing={2}>
            <Grid item xs={12} >
                <Grid container>
                    <Grid item xs={6} > 
                        <Typography 
                            variant="subtitle1" 
                            className="title justify-start"
                        >
                            {field?.key}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} > 
                        <Box 
                            component='div' 
                            className="mscb-action-status flex-row justify-end action"
                        >
                            <Box 
                                component='div' 
                                className="mscb-edit-icon-box flex justify-end icon-reload"
                            >
                                <AiOutlineReload />
                            </Box>

                            <Box 
                                component='div'
                                className="mscb-edit-icon-box flex justify-end icon-save"
                            >
                                <FaSave />
                            </Box>

                            <Box 
                                component='div' 
                                className="mscb-edit-icon-box flex justify-end icon-delete"
                            >
                                <RiDeleteBin6Line />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={6}>
                <InputDebounce
                    className={classes.input}
                    label={`1. ${labelsName}`}
                    required
                    value={field?.label}
                />
            </Grid>

            <Grid item xs={6}>
                <InputDebounce
                    className={classes.input}
                    label={`2. ${labelDefaultValue}`}
                    required
                    value={field?.default_data}
                />
            </Grid>

            <Grid item xs={6}>
                <SelectInputTypes
                    className={classes.autocomplete}
                    label={`3. ${labelInputType}`}
                    required
                    value={field?.input_type_format_id as number}
                />
            </Grid>

            <Grid item xs={6}>
                <InputDebounce
                    className={classes.input}
                    label={`4. ${labelKeyApi}`}
                    value={field?.output_result_key ?? ''}
                />
            </Grid>

            <Grid item xs={12}>
                <Switch
                    className={classes.input}
                    label={`5. ${labelRequired}`}
                    value={field?.require_flag}
                />
            </Grid>

            <Grid item xs={12}>
                <Radio
                    label={`6. ${labelValue}`}
                    variant="checkbox"
                    className={clsx(classes.input, classes.checkBox ,'mscb-input mscb-radio')}
                    options={optionRequire}
                    required
                    value={field?.output_flag !== undefined
                        ? (field?.output_flag === false
                            ? optionRequire[0].value
                            : optionRequire[1].value)
                        : undefined}
                />
            </Grid>

            <Grid item xs={12}>
                <TableApi data={dataSourceTemplate}/>
            </Grid>
            
            <Grid item xs={12} className="histoy-system">
                <Typography variant="subtitle1" className="title">
                    {t("Common.Stting.History")}
                </Typography>
                <TableHistorySystem data={field?.template_field_logs}/>
            </Grid>
        </Grid>
    )
}

export default MetaDataDetail;