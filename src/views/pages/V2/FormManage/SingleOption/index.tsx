import { FC, useRef, useState, ChangeEvent } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import MuiRadio from "@mui/material/Radio";
import Radio from "views/components/base/Radio";
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';
import { useTranslation } from "react-i18next";
import InputDebounce, { InputDebounceRef } from "views/components/base/InputDebounce";
import Select, { SelectRef } from 'views/components/base/Select';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import clsx from "clsx";
import singleOptionStyle from "./styles";

const ratio_list = [
    { value: "option1", label: "Lựa chọn 1" },
    { value: "option2", label: "Lựa chọn 2" },
    { value: "option3", label: "Lựa chọn 3" },
    ]

interface IHandArray {
    id: string;
    nKey: string;
    nValue: string;
    vKey: string;
    vValue: string;
    }
  
const SingleOption: FC = () => {
    // create css instance
    const classes = singleOptionStyle();

    const [ listItem, setListItem ] = useState<IHandArray[]>([{ id: "1", nKey: "Key", nValue: "Value", vKey: "", vValue: "" }]);
    const [inputValue, setinputValue] = useState<number>(1);
    const [inputSource, setinputSource] = useState<boolean>(true);
    const [inputHand, setinputHand] = useState<boolean>(false);
    const [disSource, setdisSource] = useState<boolean>(false);
    const [disHand, setdisHand] = useState<boolean>(true);
    const [manualInputValue, setManualInPutValue] = useState<string | null>('');
    const [manualInputKey, setManualInPutKey] = useState<string | null>('');
    const keyInput = useRef<InputDebounceRef>(null);
    const valueInput = useRef<InputDebounceRef>(null);
    const insertSource = useRef<InputDebounceRef>(null);
    const selectRef = useRef<SelectRef>(null);

    // translation
    const { t } = useTranslation();
    const placeHolderSelect= t('Common.Select');
    const placeHolderSource= t('Common.Enter.Source');
    const titleFormat= t('Common.Input.Format.Title');
    const titleCondition= t('Common.Input.Condition.Title');
    const labelDropdown= t('Common.Input.Dropdown.Label');
    const labelRatio= t('Common.Input.Ratio.Label');
    const labelDataSource= t('Common.Input.Data.Source.Label');
    const labelSource= t('Common.Input.Source.Label');
    const labelManual= t('Common.Input.Manual.Label');
    const buttonAdd= t('Common.Button.Add.Caption');

    // create root class name
    const SingleOptionClass = clsx(classes.root,"mscb-single-option");

    const onChangeSource = (event: ChangeEvent<HTMLInputElement>) => {
        const inputCheck = event.target.checked;
        if (inputCheck === true) {
        setinputHand(false);
        setinputSource(true);
        setdisHand(true);
        setdisSource(false);
        }
    }

    const onChangeManual = (event: ChangeEvent<HTMLInputElement>) => {
        const inputCheck = event.target.checked;
        if (inputCheck === true) {
        setinputSource(false);
        setinputHand(true);
        setdisHand(false);
        setdisSource(true);
        }
    }

    const onChangeAdd = () => {
        const listHand = [
            { 
                id: String(inputValue + 1), 
                nKey: "Key", 
                nValue: "Value", 
                vKey: "", vValue: "" 
            }
        ];

        setinputValue(inputValue + 1);
        setListItem(listItem.concat(listHand));
    }

    const onDelete = (indexRemove: number) => {
        let i = 0;
        const arr: IHandArray[] = [];
        listItem.forEach(item => {
        if (i === indexRemove) {
            i++;
        }
        else {
            arr.push(item);
            i++;
        }
        });
        console.log('~~~~~~~~~arr', arr);
        setListItem(arr);
    }

    // const onChangeManualInput = (index: number) => {
    //     // const changeInput = listItem.filter(i => i.id === this);
    //     // if(changeInput) {

    //     // }
    // }
    
    const onChangeKey = (index: number) => () => {
        const keyChanged = keyInput.current?.getValue() ?? '';
        // console.log('~~~~~~~key1', keyChanged);
        const currentArr = listItem;
        currentArr[index].vKey = keyChanged;
        // console.log('~~~~~~value', value);
        setListItem(currentArr);
        // console.log('~~~~~~~key', keyChanged);
        // console.log('~~~~~~~currentArr', currentArr)
    }

    const onChangeValue = (index: number) => () => {
        const valueChanged = valueInput.current?.getValue() ?? '';
        // console.log('~~~~~~~key1', valueChanged);
        const currentArr = listItem;
        currentArr[index].vValue = valueChanged;
        // console.log('~~~~~~value', value);
        setListItem(currentArr);
        // console.log('~~~~~~~key', valueChanged);
        // console.log('~~~~~~~currentArr', currentArr)
    }

    const Tbody = () => {
        return (<>
        {
            listItem.map((item, index) => {
            return (
                <Grid item xs={12} key={index}>
                    <Grid container className="mscb-single-option-manual-item">
                        <Grid item xs={4} className="manual-key">
                            <Box component="div" className="manual-key-label">
                                <Typography variant="body2" color="var(--mscb-black)">{item.nKey}</Typography>
                            </Box>
                            <Box component="div" className="manual-key-input">
                                <InputDebounce
                                    ref={ keyInput }
                                    disabled={disHand}
                                    onChange={onChangeKey(index)}
                                    value={item.vKey}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={8} className="manual-value">
                            <Box component="div" className="manual-value-label">
                                <Typography variant="body2" color="var(--mscb-black)">{item.nValue}</Typography>
                            </Box>
                            <Box component="div" className="manual-value-input">
                                <InputDebounce
                                    ref={ valueInput }
                                    disabled={disHand}
                                    onChange={onChangeValue(index)}
                                    value={item.vValue}
                                />
                            </Box>
                            <Box component="div" className="manual-delete-button">
                                <button 
                                    className="btn-bin" 
                                    disabled={disHand} 
                                    key={index} 
                                    data-index={index}  
                                    onClick={onDelete.bind(this, index)}
                                >
                                    <DeleteIcon style={{color: "#747792"}}/>
                                </button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            )
            })
        }
        </>
        )
    }

    return (
        <div className={SingleOptionClass}>
            <Grid container>
                <Grid item xs={12} className='mscb-single-option-format'>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box component="div" className='mscb-single-option-title text-upper'>
                                <Typography variant="h6" color="var(--mscb-black)">I. {titleFormat}</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <Box component="div" className='mscb-single-option-label'>
                                <Typography variant="subtitle2" color="primary">1. {labelDropdown}</Typography>
                            </Box>
                            <Box component="div" className='mscb-single-option-answer_select'>
                                <Select 
                                    ref={ selectRef }
                                    // placeholder={placeHolderSelect} 
                                    options={[
                                        {  value: "option1", label: "Câu trả lời 1" },
                                        {  value: "option2", label: "Câu trả lời 2" },
                                        {  value: "option3", label: "Câu trả lời 3" },
                                        ]}
                                />
                            </Box>
                        </Grid>
                        <Grid item lg={8} md={8} xs={12} className='mscb-single-option-option_ratio'>
                            <Box component="div" className='mscb-single-option-label'>
                                <Typography variant="subtitle2" color="primary">2. {labelRatio}</Typography>
                            </Box>
                            <Box component="div">
                                <Grid container>  
                                    <Radio 
                                        className='td-radio'
                                        variant="checkbox"
                                        options={ratio_list}
                                        row={false}
                                        value={'option1'}
                                    />              
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='mscb-single-option-condition'>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box component="div" className='mscb-single-option-title text-upper'>
                                <Typography variant="h6" color="var(--mscb-black)" >II. {titleCondition}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="div" className='mscb-single-option-source_label'>
                                <Typography variant="subtitle2" color="primary" >1. {labelDataSource}</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <Box component="div">
                                <FormControlLabel
                                    control={
                                        <MuiRadio 
                                            onChange={onChangeSource}
                                            checked={inputSource}
                                            {...{checkedIcon: <CheckCircleIcon />}}
                                        />
                                    }
                                    label={labelSource}
                                />
                            </Box>
                            <Box component="div" className='mscb-single-option-source'>
                                <InputDebounce
                                    ref={ insertSource }
                                    placeholder={ placeHolderSource }
                                    disabled={disSource}
                                />
                            </Box>
                        </Grid>
                        <Grid item lg={8} md={8} xs={12} className='mscb-single-option-manual'>
                            <Box component="div">
                                <FormControlLabel
                                    control={
                                        <MuiRadio 
                                            onChange={onChangeManual}
                                            checked={inputHand}
                                            {...{checkedIcon: <CheckCircleIcon />}}
                                        />
                                    }
                                    label={labelManual}
                                />
                            </Box>
                            <Box component="div">
                                <Grid container>
                                    <Tbody/>
                                </Grid>
                            </Box>
                                <Grid item xs={12}>
                                    <Box component="div" className="mscb-single-option-add-button">
                                        <button 
                                            className="btn-add"
                                            disabled={ disHand } 
                                            onClick={ onChangeAdd }
                                        >
                                            <Box component="div" className={clsx("add-button-label", disHand ? "" : "cursor-active")}>
                                                {
                                                    disHand
                                                    ? <Icon color="disabled">add_circle_outline</Icon>
                                                    : <Icon color="primary">add_circle</Icon>
                                                }
                                                <Typography variant="subtitle2" color="747792">{buttonAdd}</Typography>
                                            </Box>
                                        </button>
                                    </Box>
                                </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default SingleOption;