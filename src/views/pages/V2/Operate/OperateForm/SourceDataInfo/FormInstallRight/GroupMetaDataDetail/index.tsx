import {
  FunctionComponent
} from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Grid from "@mui/material/Grid";
import InputDebounce from "views/components/base/InputDebounce";
import { Typography } from '@mui/material';
import TableMataData from '../TableMetaData';
import TableHistorySystem from '../TableHistorySystem';
import GroupMetaDataDetailSyle from './style';
import { Box } from '@mui/system';
import { AiOutlineReload } from 'react-icons/ai';
import { FaSave } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ITemplateGroups } from 'types/models/TemplateFields';
import ScrollBar from 'react-perfect-scrollbar';

interface IGroupMetaDataDetailProps {
  group?: ITemplateGroups;
}

const GroupMetaDataDetail: FunctionComponent<IGroupMetaDataDetailProps> = (props) =>{
  const { group } = props;
  const { t } = useTranslation();
  const classes = GroupMetaDataDetailSyle();

  const labelsName = t("Common.Labels");

  return(
    <Grid container className={clsx("mb-2", classes.root)} spacing={2}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6} > 
              <Typography 
                variant="subtitle1" 
                className="title"
              >
                {t("Common.Setting")}
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
        <ScrollBar className="mscb-scroll-bar" options={{ suppressScrollX: true }}>
            <Grid container>
            <Grid item xs={6}>
              <InputDebounce
                className={classes.input}
                label={`1. ${labelsName}`}
                value={group?.name}
              />
          </Grid>

          <Grid item xs={12}>
            <TableMataData data={group?.items}/>
          </Grid>
          
          <Grid item xs={12} className="histoy-system">
            <Typography variant="subtitle1" className="title">
              {t("Common.Stting.History")}
            </Typography>
            <TableHistorySystem data={group?.template_field_group_logs}/>
          </Grid>
            </Grid>

        </ScrollBar>
    </Grid>
  )
}

export default GroupMetaDataDetail;