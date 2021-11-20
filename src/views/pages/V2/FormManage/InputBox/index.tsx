import { ChangeEvent, FC, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Radio, { RadioRef } from "views/components/base/Radio";
import { useTranslation } from "react-i18next";
// import Input, { InputRef } from "views/components/base/Input";
import TextEditorBase, {TextEditorRef} from "views/components/base/TextEditor"
import InputDebounce, { InputDebounceRef } from "views/components/base/InputDebounce";
import { InputType } from "views/components/base/Input";
import clsx from "clsx";
import inputBoxStyle from "./styles";

const type_list = [
    { key: 1, value: "text", label: "Chỉ văn bản" },
    { key: 2, value: "number", label: "Chỉ số" },
    { key: 3, value: "symbol", label: "Bao gồm các ký tự đặc biệt" },
    ]
  
const InputBox: FC = () => {
    const classes = inputBoxStyle();
    const typeInput = useRef<InputDebounceRef>(null);
    const charLimit = useRef<InputDebounceRef>(null);
    const EditorRef = useRef<TextEditorRef>(null);
    const [maxChar, setMaxChar] = useState<number | undefined>();
    const [type, setType] = useState<InputType | undefined>('text');
    const [radioValue, setRadioValue] = useState<string>('symbol');
    const typeRadioRef = useRef<RadioRef>(null);

    const { t } = useTranslation();
    const placeHolderTextInput= t('Common.Enter.Text');
    const placeHolderNumberInput= t('Common.Enter.Numbers');
    const titleFormat= t('Common.Input.Format.Title');
    const titleCondition= t('Common.Input.Condition.Title');
    const labelFree= t('Common.Input.Free.Label');
    const labelOption= t('Common.Input.Option.Label');
    const labelLimit= t('Common.Input.Limit.Label');
    const labelType= t('Common.Input.Type.Label');
    const InputBoxClass = clsx(classes.root,"mscb-input-box");

    // const valueCharLimit = () => charLimit.current?.getValue();

    const handleMaxChar = () => {
        setMaxChar(parseFloat(charLimit.current?.getValue() ?? '255'));
    }

    const handleChangeInputType = () => {
        const typeSelected = typeRadioRef.current?.getValue().value ?? '';
        if (typeSelected === 'text') {
            setType('text');
            setRadioValue('text');
        } else if (typeSelected === 'number') {
            setType('number');
            setRadioValue('number');
        } else {
            setType('text');
            setRadioValue('symbol');
        }
    }

    return (
        <div className={InputBoxClass}>
            <Grid container>
                <Grid item xs={12} className='mscb-input-box-format'>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box component="div" className='mscb-input-box-title text-upper'>
                                <Typography variant="h6" color="var(--mscb-black)">I. {titleFormat}</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <Box component="div" className='mscb-input-box-label'>
                                <Typography variant="subtitle2" color="primary">1. {labelFree}</Typography>
                            </Box>
                            <Box component="div" className='mscb-input-box-input_type'>
                                <InputDebounce
                                    ref={ typeInput }
                                    placeholder={ placeHolderTextInput }
                                    maxLength={ maxChar }
                                    type={ type }
                                />
                            </Box>
                        </Grid>
                        <Grid item lg={8} md={8} xs={12} className='mscb-input-box-option_form'>
                            <Box component="div" className='mscb-input-box-label'>
                                <Typography variant="subtitle2" color="primary">2. {labelOption}</Typography>
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
                            <Box component="div" className='mscb-input-box-title text-upper'>
                                <Typography variant="h6" color="var(--mscb-black)" >II. {titleCondition}</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <Box component="div" className='mscb-input-box-label'>
                                <Typography variant="subtitle2" color="primary">1. {labelLimit}</Typography>
                            </Box>
                            <Box component="div" className='mscb-input-box-input_limit'>
                                <InputDebounce
                                    ref={ charLimit }
                                    placeholder={ placeHolderNumberInput }
                                    type='number'
                                    onDebounce={handleMaxChar}
                                />
                            </Box>
                        </Grid>
                        <Grid item lg={8} md={8} xs={12} className='mscb-input-box-type_form'>
                            <Box component="div" className='mscb-input-box-label'>
                                <Typography variant="subtitle2" color="primary">2. {labelType}</Typography>
                            </Box>
                            <Box component="div">
                                <Grid container>
                                    <Radio 
                                        className='td-radio'
                                        variant="checkbox"
                                        options={type_list}
                                        row={false}
                                        onChange={handleChangeInputType}
                                        ref={typeRadioRef}
                                        value={radioValue}
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

export default InputBox;