import { FC, useRef, useState, ChangeEvent } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';
import { useTranslation } from "react-i18next";
import Input, { InputRef } from "views/components/base/Input";
import { SelectRef } from 'views/components/base/Select';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Theme, useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { IoMdClose } from 'react-icons/io';
import clsx from "clsx";
import multipleOptionStyle from "./styles";
import { MenuItem } from "@mui/material";

const checkbox_list = [
    { key: 1, value: "option1", label: "Lựa chọn 1" },
    { key: 2, value: "option2", label: "Lựa chọn 2" },
    { key: 3, value: "option3", label: "Lựa chọn 3" },
]

function getStyles(name: string, selectName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            selectName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

interface IHandArray {
    id: string;
    nKey: string;
    nValue: string;
    vKey: string;
    vValue: string;
    }
  
const MultipleOptions: FC = () => {
    // create css instance
    const classes = multipleOptionStyle();
    const theme = useTheme();

    const [ listItem, setListItem ] = useState<IHandArray[]>([{ id: "1", nKey: "Key", nValue: "Value", vKey: "", vValue: "" }]);
    const [inputValue, setinputValue] = useState<number>(1);
    const [inputSource, setinputSource] = useState<boolean>(true);
    const [inputHand, setinputHand] = useState<boolean>(false);
    const [disSource, setdisSource] = useState<boolean>(false);
    const [disHand, setdisHand] = useState<boolean>(true);
    const keyInput = useRef<InputRef>(null);
    const valueInput = useRef<InputRef>(null);
    const insertSource = useRef<InputRef>(null);
    const selectRef = useRef<SelectRef>(null);
    const [selectName, setSelectName] = useState<string[]>([]);

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
    const MultipleOptionClass = clsx(classes.root,"mscb-multiple-options");

    const handleChangeSelect = (event: SelectChangeEvent<typeof selectName>) => {
        const {
            target: { value },
        } = event;
        setSelectName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleDeleteSelect = () => {   
    };

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
        setListItem(arr);
    }

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
                    <Grid container className='mscb-multiple-options-manual-item'>
                        <Grid item xs={4} className="manual-key">
                            <Box component="div" className="manual-key-label">
                                <Typography variant="body2" color="var(--mscb-black)">{item.nKey}</Typography>
                            </Box>
                            <Box component="div" className="manual-key-input">
                                <Input
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
                                <Input
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
        <div className={MultipleOptionClass}>
            <Grid container>
                <Grid item xs={12} className='mscb-multiple-options-format'>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box component="div" className='mscb-multiple-options-title text-upper'>
                                <Typography variant="h6" color="var(--mscb-black)">I. {titleFormat}</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <Box component="div" className='mscb-multiple-options-label'>
                                <Typography variant="subtitle2" color="primary">1. {labelDropdown}</Typography>
                            </Box>
                            <Box component="div" className='mscb-multiple-options-answer_select'>
                                <Box component="div" className={clsx('mscb-input')}>
                                    <MuiSelect
                                        ref={selectRef}
                                        multiple
                                        value={selectName}
                                        variant="standard"
                                        onChange={handleChangeSelect}
                                        IconComponent={KeyboardArrowDown}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {selected.map((value, i) => (
                                                    <Chip
                                                        key={i}
                                                        label={value}
                                                        onDelete={handleDeleteSelect}
                                                        deleteIcon={<IoMdClose color="#fff" />}
                                                    />
                                                ))}
                                            </Box>
                                        )}
                                    >
                                        {checkbox_list.map((name) => (
                                            <MenuItem
                                                key={name.key}
                                                value={name.label}
                                                style={getStyles(name.label, selectName, theme)}
                                            >
                                                {name.label}
                                            </MenuItem>
                                        ))}
                                    </MuiSelect>
                                </Box>
                                
                            </Box>
                        </Grid>
                        <Grid item lg={8} md={8} xs={12} className='mscb-multiple-options-option_ratio'>
                            <Box component="div" className='mscb-multiple-options-label'>
                                <Typography variant="subtitle2" color="primary">2. {labelRatio}</Typography>
                            </Box>
                            <Box component="div">
                                <Grid container>
                                    {checkbox_list.map((item, index) => {
                                            return(
                                                <Grid item xs={12} key={index}>
                                                    <FormControlLabel
                                                        key={index}
                                                        value={item.value}
                                                        control={<Checkbox />}
                                                        label={item.label}
                                                    />
                                                </Grid>
                                            )
                                        })}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='mscb-multiple-options-condition'>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box component="div" className='mscb-multiple-options-title text-upper'>
                                <Typography variant="h6" color="var(--mscb-black)" >II. {titleCondition}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="div" className='mscb-multiple-options-source_label'>
                                <Typography variant="subtitle2" color="primary" >1. {labelDataSource}</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <Box component="div">
                                <FormControlLabel
                                    control={
                                        <Radio 
                                            onChange={onChangeSource}
                                            checked={inputSource}
                                            {...{checkedIcon:<CheckCircleIcon />}}
                                        />
                                    }
                                    label={labelSource}
                                />
                            </Box>
                            <Box component="div" className='mscb-multiple-options-source'>
                                <Input
                                    ref={ insertSource }
                                    placeholder={ placeHolderSource }
                                    disabled={disSource}
                                />
                            </Box>
                        </Grid>
                        <Grid item lg={8} md={8} xs={12} className='mscb-multiple-options-manual'>
                            <Box component="div">
                                <FormControlLabel
                                    control={
                                        <Radio 
                                            onChange={onChangeManual}
                                            checked={inputHand}
                                            {...{checkedIcon:<CheckCircleIcon />}}
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
                                    <Box component="div" className="mscb-multiple-options-add-button">
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

export default MultipleOptions;