import { FC, useRef } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useTranslation } from "react-i18next";
import Input, { InputRef } from "views/components/base/Input";
import TextEditorBase, {TextEditorRef} from "views/components/base/TextEditor"
import clsx from "clsx";
import inputBoxStyle from "./styles";

const type_list = [
    { key: 1, value: "text", label: "Chỉ văn bản" },
    { key: 2, value: "number", label: "Chỉ số" },
    { key: 3, value: "symbol", label: "Bao gồm các ký tự đặc biệt" },
    ]
  
const InputBox: FC = () => {
    const classes = inputBoxStyle();
    const typeInput = useRef<InputRef>(null);
    const charLimit = useRef<InputRef>(null);
    const EditorRef = useRef<TextEditorRef>(null);
    const { t } = useTranslation();
    const labelTextInput= t('Common.Enter.Text');
    const labelNumberInput= t('Common.Enter.Number');
    const titleFormat= t('Common.Input.Format.Title');
    const titleCondition= t('Common.Input.Condition.Title');
    const labelFree= t('Common.Input.Free.Label');
    const labelOption= t('Common.Input.Option.Label');
    const labelLimit= t('Common.Input.Limit.Label');
    const labelType= t('Common.Input.Type.Label');
    const InputBoxClass = clsx(classes.root,"mscb-input-box");

    return (
        <div className={InputBoxClass}>
            <Grid container>
                <Grid item xs={12} className='mscb-input-box-format'>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box component="div" className='mscb-input-box-title'>
                                <Typography variant="h6" color="var(--mscb-black)">I.{titleFormat}</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <Box component="div" className='mscb-input-box-label'>
                                <Typography variant="subtitle2" color="primary">1.{labelFree}</Typography>
                            </Box>
                            <Box component="div" className='mscb-input-box-input_type'>
                                <Input
                                    ref={ typeInput }
                                    placeholder={ labelTextInput }
                                />
                            </Box>
                        </Grid>
                        <Grid item lg={8} md={8} xs={12} className='mscb-input-box-option_form'>
                            <Box component="div" className='mscb-input-box-label'>
                                <Typography variant="subtitle2" color="primary">2.{labelOption}</Typography>
                            </Box>
                            <Box component="div" className={classes.TextEditor}>
                                <TextEditorBase ref={EditorRef}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='mscb-input-box-condition'>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box component="div" className='mscb-input-box-title'>
                                <Typography variant="h6" color="var(--mscb-black)" >II.{titleCondition}</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <Box component="div" className='mscb-input-box-label'>
                                <Typography variant="subtitle2" color="primary">1.{labelLimit}</Typography>
                            </Box>
                            <Box component="div" className='mscb-input-box-input_limit'>
                                <Input
                                    ref={ charLimit }
                                    placeholder={ labelNumberInput }
                                />
                            </Box>
                        </Grid>
                        <Grid item lg={8} md={8} xs={12} className='mscb-input-box-type_form'>
                            <Box component="div" className='mscb-input-box-label'>
                                <Typography variant="subtitle2" color="primary">2.{labelType}</Typography>
                            </Box>
                            <Box component="div">
                                <Grid container>
                                    <RadioGroup
                                        name="spacing"
                                        aria-label="spacing"
                                        row
                                    >
                                        {type_list.map((item, index) => {
                                            return(
                                                <Grid item xs={12}>
                                                    <FormControlLabel
                                                        key={index}
                                                        value={item.value}
                                                        control={<Radio />}
                                                        label={item.label}
                                                    />
                                                </Grid>
                                            )
                                        })}
                                    </RadioGroup>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default InputBox;