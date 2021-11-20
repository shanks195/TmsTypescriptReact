import { FC, useEffect, useRef, useState } from 'react';
import Grid from "@mui/material/Grid";
import clsx from "clsx";
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate,useLocation } from 'react-router-dom';
import CardOutside from "views/components/layout/CardOutside";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Input, { InputRef } from 'views/components/base/Input';
import { useTranslation } from "react-i18next";
import SelectParentGroup, {  SelectParentGroupRef } from 'views/components/layout/SelectParentGroup';
import SelectStatusType,{  SelectStatusTypeRef } from 'views/components/layout/SelectStatusType';
import {
    fetchTemplatedata,
    getTemplatedataLimit,
    // setTemplatedataCurrentPage
} from "features/templatedata/store/slice";
import GroupTable from './FormGroupTable'
import { getQueryString, getSearchPage, getSearchPageString } from 'utils';
import { IInitPageGroup } from 'types/models/Templatedata';
import formGroupListStyle from './styles'


const GroupList: FC = () => {
    const classes = formGroupListStyle()
    
    const GroupListClass = clsx(classes.root, "mscb-group-list");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { search } = useLocation();
    const codeInputRef = useRef<InputRef>(null);
    const parentSelectRef = useRef<SelectParentGroupRef>(null);
    const nameRef = useRef<InputRef>(null);
    const statusSelectRef = useRef<SelectStatusTypeRef>(null);
    const limit = useSelector(getTemplatedataLimit);
    // translation
    const { t } = useTranslation();
    const enterPlaceholder = t('Common.Enter');
    const searchTabTitle= t('Pages.Group.Search.Title');
    const codeLabel = t('Pages.Group.Code.Label');
    const parentGroupLabel = t('Pages.Group.Parent.Label');
    const groupNameLabel = t('Pages.Group.Name.Label');
    const statusInputLabel = t('Pages.Group.Status.Label');
    const cancelCaption = t('Common.Button.Cancel.Caption');
    const searchCaption = t('Common.Button.Search.Caption');
    const selectClass = clsx('mscb-input');

    const [activeFlag, setActiveFlag] = useState<string>();
    const [codeGroup, setCodeGroup] = useState<string>();
    const [parentSelect, setParentSelect] = useState<string>();
    const [nameGroup, setNameGroup] = useState<string>();

    const valueActive = () => statusSelectRef.current?.getValue()?.id.toString();
    const valueParentGroupType = () => parentSelectRef.current?.getValue()?.id;
    const valueCodeType = () => codeInputRef.current?.getValue();
    const valueName = () => nameRef.current?.getValue();
    const changeStatus = () => {
        setActiveFlag(valueActive())
    }

    useEffect(()=>{

        const value =  getSearchPageString(search,'code');
        if(codeGroup !== value)
        {
            setCodeGroup(value)
        }
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ search])

    useEffect(()=>{
        const value =  getSearchPageString(search,'parent_id');
        if(parentSelect !== value)
        {
            setParentSelect(value)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

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
        const value =  getSearchPageString(search,'name')
        if(nameGroup !== value)
        {
            setNameGroup(value)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const handleSearchGroupTemplatedata = () => {
        const urlPage = getSearchPage(search, 'page');
        const dataSearch = {
            'page': urlPage,
            'active_flag': valueActive(),
            'parent_id': valueParentGroupType(),
            'code': valueCodeType()=== ""? undefined :  valueCodeType(),
            'name': valueName()  === ""? undefined :  valueName(),
            'limit': limit,
            'order_by': 'asc',

        } 
        navigate(`?${getQueryString(dataSearch)}`)
        dispatch(fetchTemplatedata(dataSearch as IInitPageGroup));
                
    }
    const handleCancelSearchTemplatedata = () => {
        const dataSearch = {
            'page': getSearchPage(search,'page'),
            'limit': limit,
            'order_by': 'asc',  
        } 
        navigate(`?${getQueryString(dataSearch)}`);
        dispatch(fetchTemplatedata(dataSearch as IInitPageGroup));
        setCodeGroup(undefined);
        setParentSelect(undefined)
        setNameGroup(undefined)
        setActiveFlag(undefined)
    }
    return (
        <Grid container className={GroupListClass}>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={3} className="group-list-search-content">
                    <CardOutside label={searchTabTitle}>
                        <Grid container style={{paddingLeft:'5px', paddingRight: '0px'}}>
                            <Grid item xs={12} style={{paddingBottom: '18px'}}>
                                <Box component="div" className="group-search-type_select">
                                    <Input 
                                        label={`1.${codeLabel}`}
                                        ref={ codeInputRef }
                                        placeholder={enterPlaceholder}
                                        value={codeGroup}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} style={{paddingBottom: '18px'}}>
                                <Box component="div" className="group-search-name_select">
                                    <SelectParentGroup 
                                    label={`2.${parentGroupLabel}`}
                                    ref={parentSelectRef}
                                    value={parentSelect}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} style={{paddingBottom: '18px'}}>
                                <Box component="div" className="group-search-status_select">
                                    <Input 
                                        label={`3.${groupNameLabel}`}
                                        ref={ nameRef }
                                        placeholder={enterPlaceholder}
                                        value={nameGroup}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} className="group-search-system_select">
                                <Box component="div" className={selectClass}>
                                    <SelectStatusType
                                        label={`4.${statusInputLabel}`} 
                                            ref={statusSelectRef}
                                            onChange={changeStatus}
                                            value={activeFlag}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container className="form-group-search-action">
                                    <Grid item>
                                        <Box component="div" className="search-cancel-box">
                                        <Button variant="contained" onClick={handleCancelSearchTemplatedata } className="cancel-btn">{cancelCaption}</Button>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box component="div" className="search-search-box">
                                            <Button variant="contained" onClick={handleSearchGroupTemplatedata} className="search-btn">{searchCaption}</Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardOutside>
                    </Grid>
                    <Grid item xs={9} className="group-list-table-content">
                        <GroupTable />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default GroupList;