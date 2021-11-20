import { FC, useRef } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Radio from "views/components/base/Radio";
import { useTranslation } from "react-i18next";
import Select, { SelectRef } from 'views/components/base/Select';
import clsx from "clsx";
import questionStyle from "./styles";

const ratio_list = [
    { value: "yes", label: "Có" },
    { value: "no", label: "Không" },
    ]
  
const Questions: FC = () => {
    // create css instance
    const classes = questionStyle();

    const selectRef = useRef<SelectRef>(null);

    // translation
    const { t } = useTranslation();
    // const placeHolderSelect= t('Common.Select');
    const titleFormat= t('Common.Input.Format.Title');
    const labelDropdown= t('Common.Input.Dropdown.Label');
    const labelList= t('Common.Input.List.Label');


    // create root class name
    const QuestionsClass = clsx(classes.root,"mscb-questions");


    return (
        <div className={QuestionsClass}>
            <Grid container>
                <Grid item xs={12} className='mscb-questions-format'>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box component="div" className='mscb-questions-format-title text-upper'>
                                <Typography variant="h6" color="var(--mscb-black)">I. {titleFormat}</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <Box component="div" className='mscb-questions-label'>
                                <Typography variant="subtitle2" color="primary">1. {labelDropdown}</Typography>
                            </Box>
                            <Box component="div" className='mscb-questions-answer_select'>
                                <Select 
                                    ref={ selectRef }
                                    // placeholder={placeHolderSelect} 
                                    options={[
                                        {  value: "yes", label: "Có" },
                                        {  value: "no", label: "Không" },
                                        ]}
                                />
                            </Box>
                        </Grid>
                        <Grid item lg={8} md={8} xs={12} className='mscb-questions-option_ratio'>
                            <Box component="div" className='mscb-questions-label'>
                                <Typography variant="subtitle2" color="primary">2. {labelList}</Typography>
                            </Box>
                            <Box component="div">
                                <Grid container>
                                <Radio 
                                        className='td-radio'
                                        variant="checkbox"
                                        options={ratio_list}
                                        value={'yes'}
                                    /> 
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Questions;