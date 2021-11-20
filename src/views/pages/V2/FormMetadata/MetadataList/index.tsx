import { FC, useEffect, useRef, useState } from 'react';
import Grid from "@mui/material/Grid";
import clsx from "clsx";
import MetadataTable from './MetadataTable'
import { Box } from '@mui/system';
import { Button, MenuItem, Typography } from '@mui/material';
import { SelectRef } from 'views/components/base/Select';
import { Theme, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { IoMdClose } from 'react-icons/io';
import CardOutside from 'views/components/layout/CardOutside';
import SelectInputTypes, { SelectInputTypesRef } from 'views/components/layout/SelectInputTypes';
import SelectStatusType, { SelectStatusTypeRef } from 'views/components/layout/SelectStatusType';
import { fetchMetadata, getMetadataLimit } from 'features/metadata/store/slice';

import { IInitPage } from 'types/models/MetadataList';
import { useLocation, useNavigate } from 'react-router-dom';
import InputDebounce, { InputDebounceRef } from 'views/components/base/InputDebounce';
import { getQueryString, getSearchPage, getSearchPageString, } from 'utils';
import metadataListStyle from './styles'

const names = [
    {
        key: 1,
        label: 'CRM'
    },
    {
        key: 2,
        label: 'LOS'
    }, {
        key: 3,
        label: 'HRM'
    },
];

function getStyles(name: string, systemName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            systemName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const MetaDataList: FC = () => {

    const classes = metadataListStyle()
    const MetadataListClass = clsx(classes.root, "mscb-metadata-list");
    const dispatch = useDispatch();
    const theme = useTheme();
    const [systemName, setSystemName] = useState<string[]>([]);
    const typeSelectRef = useRef<SelectInputTypesRef>(null);
    const nameMetadataRef = useRef<InputDebounceRef>(null);
    const statusSelectRef = useRef<SelectStatusTypeRef>(null);
    const systemSelectRef = useRef<SelectRef>(null);
    const limit = useSelector(getMetadataLimit);
    const { search } = useLocation();
    const navigate = useNavigate();

    const { t } = useTranslation();
    const searchTabTitle = t('Pages.Metadata.Search.Title');
    const typeInputLabel = t('Pages.Layout.Group');
    const nameInputLabel = t('Pages.Metadata.Name.Label');
    const statusInputLabel = t('Pages.Metadata.Status.Label');
    const systemInputLabel = t('Pages.Metadata.System.Label');
    const cancelCaption = t('Common.Button.Cancel.Caption');
    const searchCaption = t('Common.Button.Search.Caption');

    const selectClass = clsx('mscb-input');

    const [inputType, setInputType] = useState<number>()
    const [activeFlag, setActiveFlag] = useState<string>();
    const [nameMeta, setNameMeta] = useState<string>();

    useEffect(()=>{
        const value =  getSearchPageString(search,'input_type_id');
        if(inputType?.toString() !== value)
        {
            setInputType(Number(value))
        }
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ search])

    useEffect(()=>{
        const value =  getSearchPageString(search,'name');
        if(nameMeta !== value)
        {
            setNameMeta(value)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search])

    useEffect(()=>{
        let value;
        if(getSearchPageString(search,'active_flag') === 'true' )
        {
            value ='Activate';
        }else if(getSearchPageString(search,'active_flag') === 'false')
        {
            value ='Stop';
        }
        else{
            value= undefined;
        }
        if(activeFlag !== value)
        {
            setActiveFlag(value);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search])

    useEffect(()=>{
        const value =  getSearchPageString(search,'list_c_system_type').replace(/[^0-9]/g,'');
        const list = value.split('').map((item, index) => {
            return names.find(i => i.key === Number(item))?.label  ?? ''
        })
        if(systemName && value.length >0)
        {
            setSystemName(list)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleChange = (event: SelectChangeEvent<typeof systemName>) => {
        const {
            target: { value },
        } = event;
        setSystemName(
            typeof value === 'string' ? value.split(',') : value,
        );

    };

    const valueSysType = () => {
        const list = systemName.map((item, index) => {
            return names.find(i => i.label === item)?.key
        })
        return list;
    }
    const valueActive = () => statusSelectRef.current?.getValue()?.id.toString();
    const valueInputType = () => typeSelectRef.current?.getValue()?.id;
    const valueNameMetadata = () => nameMetadataRef.current?.getValue()?.trim();

    const handleDelete = () => {
        
    };

    const handleSearchMetadata = () => {
        const urlPage = getSearchPage(search, 'page');
        const dataSearch = {
            'page': urlPage,
            'active_flag': valueActive(),
            'input_type_id': valueInputType(),
            'list_c_system_type': valueSysType().length > 0 ? JSON.stringify(valueSysType()) : undefined,
            'name': valueNameMetadata() === "" ? undefined : valueNameMetadata(),
            'limit': limit,
            'order_by': 'asc',
        }
        navigate(`?${getQueryString(dataSearch)}`)
        dispatch(fetchMetadata(dataSearch as IInitPage))
    }
    const handleCancelSearchMetadata = () => {
      
        const dataSearch = {
            'page': getSearchPage(search,'page'),
            'limit': limit,
            'order_by': 'asc',
        } 
        navigate(`?${getQueryString(dataSearch)}`)
        dispatch(fetchMetadata(dataSearch as IInitPage))
        setInputType(undefined);
        setActiveFlag(undefined);
        setSystemName([]);
        setNameMeta(undefined);
    }

    const changeType = ()=>{
        setInputType(valueInputType())
    }

    // const changeStatus = ()=>{
    //     setActiveFlag(valueActive())
    // }

    return (
        <Grid container className={MetadataListClass}>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={3} className="metadata-list-search-content">
                        <CardOutside label={searchTabTitle}>
                            <Grid container style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                                <Grid item xs={12} style={{ paddingBottom: '18px' }}>
                                    <Box component="div" className="metadata-search-label">
                                        <Typography variant="subtitle1" color="var(--mscb-black)">1.{typeInputLabel}</Typography>
                                    </Box>
                                    <Box component="div" className="metadata-search-type_select">
                                        <SelectInputTypes
                                            ref={typeSelectRef}
                                            onChange={changeType}
                                            value={inputType}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} style={{ paddingBottom: '18px' }}>
                                    <Box component="div" className="metadata-search-label">
                                        <Typography variant="subtitle1" color="var(--mscb-black)"></Typography>
                                    </Box>
                                    <Box component="div" className="metadata-search-name_select">
                                        <InputDebounce label={`2. ${nameInputLabel}`}
                                            ref={nameMetadataRef}
                                            value={nameMeta}
                                            timeout={0}
                                            placeholder='Nhập'
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} style={{ paddingBottom: '18px' }}>
                                    <Box component="div" className="metadata-search-label">
                                        <Typography variant="subtitle1" color="var(--mscb-black)">3.{statusInputLabel}</Typography>
                                    </Box>
                                    <Box component="div" className="metadata-search-status_select">
                                        <SelectStatusType
                                            ref={statusSelectRef}
                                            // onChange={changeStatus}
                                            value={activeFlag}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className="metadata-search-system_select">
                                    <Box component="div" className="metadata-search-label">
                                        <Typography variant="subtitle1" color="var(--mscb-black)">4.{systemInputLabel}</Typography>
                                    </Box>
                                    <Box component="div" className={selectClass}>
                                        <MuiSelect
                                            ref={systemSelectRef}
                                            multiple
                                            value={systemName}
                                            variant="standard"
                                            onChange={handleChange}
                                            IconComponent={KeyboardArrowDown}
                                            renderValue={(selected) => (
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                    {selected.map((value, i) => (
                                                        <Chip
                                                            key={i}
                                                            label={value}
                                                            onDelete={handleDelete}
                                                            deleteIcon={<IoMdClose color="#fff" />}
                                                        />
                                                    ))}
                                                </Box>
                                            )}
                                        >
                                            {names.map((name) => (
                                                <MenuItem
                                                    key={name.key}
                                                    value={name.label}
                                                    style={getStyles(name.label, systemName, theme)}
                                                >
                                                    {name.label}
                                                </MenuItem>
                                            ))}
                                        </MuiSelect>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container className="form-metadata-search-action">
                                        <Grid item>
                                            <Box component="div" className="search-cancel-box">
                                                <Button variant="contained" onClick={handleCancelSearchMetadata} className="cancel-btn">{cancelCaption}</Button>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box component="div" className="search-search-box">
                                                <Button variant="contained" onClick={handleSearchMetadata} className="search-btn">{searchCaption}</Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardOutside>
                    </Grid>
                    <Grid item xs={9} className="metadata-list-table-content">
                        <MetadataTable/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MetaDataList;