import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Typography from "@mui/material/Typography";
import { SelectRef } from 'views/components/base/Select';
import Input, { InputRef } from 'views/components/base/Input';
import { ILevelDataRef } from './LevelTable';
import clsx from 'clsx';
import { useTranslation } from "react-i18next";
import { IoCloudUploadOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import {
    Dialog, DialogContent, DialogTitle,
    Grid, IconButton, SelectChangeEvent, Box
} from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import MuiSelect from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import CardInline from 'views/components/layout/CardInline';
import Checkbox, { CheckboxRef } from 'views/components/base/Checkbox';
import LevelTable from './LevelTable';
import generalStyle from './style';
import SelectFolderTree, { SelectFolderTreeRef } from 'views/components/layout/SelectFolderTree';
import SelectBlock, { SelectBlockRef } from 'views/components/layout/SelectBlock';
import InputDebounce from 'views/components/base/InputDebounce';
import SelectDepartment, { SelectDepartmentRef } from 'views/components/layout/SelectDepartment';
import SelectTemplateType, { SelectTemplateTypeRef } from 'views/components/layout/SelectTemplateType';
import SelectStatusTree, { SelectStatusTreeRef } from 'views/components/layout/SelectStatusTree';
import { getTemplateDetails } from 'features/operate-details-info/store/slice';

import { useSelector } from 'react-redux';
import { FcFolder } from 'react-icons/fc';
import { FaTrash } from 'react-icons/fa';

import InputDate, { InputDateRef } from 'views/components/base/Date';
import moment from 'moment';
import { FaIdCard } from 'react-icons/fa';

export interface IFormGeneralInfoData {
    folder_id: number;
    c_status: number;
    code: string | null;
    name: string;
    identify_number: string;
    block_id: number;
    department_id: number;
    c_type: number;
    khcn_flag?: boolean;
    khdn_flag?: boolean;
    dntn_flag?: boolean;
    scb_flag?: boolean;
    start_date: string;
    end_date: string | Date;
    template_api: string;
    list_c_system_type: number[];
    file: File;
    template_id?: number;
    version?: number;
}

export interface FormGeneralInfoRef {
    getValue(): IFormGeneralInfoData

}

interface FormGeneralInfoProps {
    isUpdate?: boolean;
}

interface FormGeneralInfoComponent extends ForwardRefRenderFunction<FormGeneralInfoRef, FormGeneralInfoProps> { }

const FormGeneralInfo: FormGeneralInfoComponent = (props, ref) => {
    const { isUpdate } = props;
    const classes = generalStyle();
    const [systemName, setSystemName] = useState<string[]>([]);
    const theme = useTheme();
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [validFiles, setValidFiles] = useState<File[]>([]);
    const [unsupportedFiles, setUnsupportedFiles] = useState<File[]>([]);
    const [isOpenLevelModal, setIsOpenLevelModal] = useState<boolean>(false);
    const { t } = useTranslation();
    const tableRef = useRef<ILevelDataRef>(null);

    const detailsTemplateData = useSelector(getTemplateDetails);
    let systemMap: string[] = [];
    const selectClass = clsx('mscb-input');
    const titleDir = t('Pages.Layout.EForm.TInfor.Direct');
    const titleBasicInfor = t('Pages.Layout.EForm.TInfor.Basic');
    const labelLevel = t('Pages.Layout.EForm.TInfor.Level');
    const labelDocNum = t('Pages.Layout.EForm.TInfor.DocNum');
    const labelDocNam = t('Pages.Layout.EForm.TInfor.DocName');
    const labelCode = t('Pages.Layout.EForm.TInfor.Code');
    const labelBlock = t('Pages.Layout.EForm.TInfor.Block');
    const labelRoom = t('Pages.Layout.EForm.TInfor.Room');
    const labelModel = t('Pages.Layout.EForm.TInfor.Models');
    const labelDateHL = t('Pages.Layout.EForm.TInfor.DateHL');
    const labelDateStop = t('Pages.Layout.EForm.TInfor.DateStop');
    const labelObject = t('Pages.Layout.EForm.TInfor.Object');
    const labelAPI = t('Pages.Layout.EForm.TInfor.API');
    const labelSys = t('Pages.Layout.EForm.TInfor.System');
    const titleDow = t('Pages.Layout.EForm.TInfor.Download');
    const versionsModalTitle = t('Pages.Layout.EForm.TInfor.ModalTitle');
    const labelStatus = t('Pages.Layout.EForm.TInfor.Status');


    const names = [
        {
            key: 1,
            label: 'CRM'
        },
        {
            key: 2,
            label: 'LOS'
        },
        {
            key: 3,
            label: 'HRM'
        },
    ];


    useEffect(() => {
        // eslint-disable-next-line array-callback-return
        detailsTemplateData?.list_c_system_type.map(i => {
            // eslint-disable-next-line array-callback-return
            names.map(lst => {
                if (lst.key === i) {
                    systemMap.push(lst.label);
                }
                return lst;
            })
            setSystemName(systemMap);
            return i;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detailsTemplateData])
    const folderIdRef = useRef<SelectFolderTreeRef>(null);
    const statusTreeRef = useRef<SelectStatusTreeRef>(null);
    const inputVersionRef = useRef<InputRef>(null);
    const inputDocNumRef = useRef<InputRef>(null);
    const inputDocNameRef = useRef<InputRef>(null);
    const inputCodeRef = useRef<InputRef>(null);
    const selectBlockRef = useRef<SelectBlockRef>(null);
    const selectDepartmentRef = useRef<SelectDepartmentRef>(null);
    const selectTemplateTypeRef = useRef<SelectTemplateTypeRef>(null);
    const khcn_flagRef = useRef<CheckboxRef>(null);
    const khdn_flagRef = useRef<CheckboxRef>(null);
    const dntn_flagRef = useRef<CheckboxRef>(null);
    const scb_flagRef = useRef<CheckboxRef>(null);
    const startDateRef = useRef<InputDateRef>(null);
    const lastDateRef = useRef<InputDateRef>(null);
    const apiRef = useRef<InputRef>(null);
    const systemSelectRef = useRef<SelectRef>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const get = () => inputDocNumRef.current?.getValue() ?? '';

    useImperativeHandle(ref, () => ({
        getValue: () => ({
            folder_id: folderIdRef.current?.getValue()?.id ?? 0,
            c_status: statusTreeRef.current?.getValue()?.id ?? 0,
            code: get(),
            name: inputDocNameRef.current?.getValue() ?? '',
            identify_number: inputCodeRef.current?.getValue() ?? '',
            block_id: selectBlockRef.current?.getValue()?.id ?? 0,
            department_id: selectDepartmentRef.current?.getValue()?.id ?? 0,
            c_type: selectTemplateTypeRef.current?.getValue()?.id ?? 0,
            khcn_flag: khcn_flagRef.current?.getChecked()[0],
            khdn_flag: khdn_flagRef.current?.getChecked()[0],
            dntn_flag: dntn_flagRef.current?.getChecked()[0],
            scb_flag: scb_flagRef.current?.getChecked()[0],
            start_date: moment(startDateRef.current?.getValue(), 'DD-MM-YYYY', true).isValid() ? moment(startDateRef.current?.getValue()).format('YYYY-MM-DD') : '',
            end_date: moment(lastDateRef.current?.getValue(), 'DD-MM-YYYY', true).isValid() ? moment(lastDateRef.current?.getValue()).format('YYYY-MM-DD') : '',
            template_api: apiRef.current?.getValue() ?? '',
            list_c_system_type: getData() as [] ?? [],
            // file: selectedFiles[0]
            file: selectedFiles[0],
            version: Number(inputVersionRef.current?.getValue()) ?? 0 ,
        })
    }));

    const getData = () => {
            const list = systemName.map((item, index) => {
                return names.find(i => i.label === item)?.key
            })
            return list;
    }


    function getStyles(name: string, systemName: readonly string[], theme: Theme) {
        return {
            fontWeight:
                systemName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const handleChange = (event: SelectChangeEvent<typeof systemName>) => {
        const {
            target: { value },
        } = event;
        setSystemName(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleDelete = () => {
        console.log('You clicked the delete icon.');
    };

    useEffect(() => {
        const filteredArray: File[] = selectedFiles.reduce((file: File[], current: File) => {
            const x = file.find((item: File) => item.name === current.name);
            if (!x) {
                return file.concat([current]);
            } else {
                return file;
            }
        }, []);
        setValidFiles([...filteredArray]);

    }, [selectedFiles]);


    const dragOver = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    const dragEnter = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    const dragLeave = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    const fileDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    const validateFile = (file: File) => {
        const validTypes = ['image/jpg', 'image/png'];
        if (validTypes.indexOf(file.type) === -1) {
            return true;
        }
        return false;
    }

    const handleFiles = (files: FileList) => {
        for (let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                setSelectedFiles((prevArray: File[]) => [...prevArray, files[i]]);
            } else {
                setSelectedFiles((prevArray: File[]) => [...prevArray, files[i]]);
                //setErrorMessage('File type not permitted');
                setUnsupportedFiles((prevArray: File[]) => [...prevArray, files[i]]);
            }
        }
    }

    const removeFile = (name: string) => {
        const validFileIndex = validFiles.findIndex((e: File) => e.name === name);
        validFiles.splice(validFileIndex, 1);
        // update validFiles array
        setValidFiles([...validFiles]);
        const selectedFileIndex = selectedFiles.findIndex((e: File) => e.name === name);
        selectedFiles.splice(selectedFileIndex, 1);
        // update selectedFiles array
        setSelectedFiles([...selectedFiles]);
        const unsupportedFileIndex = unsupportedFiles.findIndex((e: File) => e.name === name);
        if (unsupportedFileIndex !== -1) {
            unsupportedFiles.splice(unsupportedFileIndex, 1);
            // update unsupportedFiles array
            setUnsupportedFiles([...unsupportedFiles]);
        }
    }

    const fileInputClicked = () => {
        fileInputRef.current?.click();
    }

    const filesSelected = () => {
        if (fileInputRef.current?.files?.length) {
            handleFiles(fileInputRef.current.files);
        }
    }


    const DropZone = () => {
        return (
            <Grid container className={clsx(classes.rootDropInfo, 'wh-full',)} sx={{ overflowY: 'auto', height: '500px' }}>
                {
                    detailsTemplateData?.file_name ? (
                        <div className={classes.fileDisplayContainers}>
                            <Grid container className="file-status-bar">
                                    <div className="file-type-logo"><FcFolder /></div>
                                    <div className="file-info">
                                    <div className="file-name">{detailsTemplateData?.file_name}</div>
                                    </div>
                            </Grid>
                        </div>
                    ) :
                        (<div className={classes.fileDisplayContainers}>
                            <Grid item xs={12} className="container-basic">
                                <Grid container className="drop-container-basic"
                                    onDragOver={dragOver}
                                    onDragEnter={dragEnter}
                                    onDragLeave={dragLeave}
                                    onDrop={fileDrop}
                                    onClick={fileInputClicked}>
                                    <Grid container className="drop-message-basic">
                                        <Grid item xs={12} className="upload-icon-basic">
                                            <IoCloudUploadOutline color="#e6eaf3" />
                                            <p className="text-drop">Drop files to upload or <span style={{ color: 'blue', textDecorationLine: 'underline' }}>browse</span></p>
                                        </Grid>
                                    </Grid>
                                    <input
                                        ref={fileInputRef}
                                        className="file-input"
                                        type="file"
                                        // multiple
                                        onChange={filesSelected}
                                    />
                                </Grid>
                                <Grid container className="file-display-contain-basic">
                                    {
                                        validFiles.map((data: File, i: number) =>
                                            <Grid container className="file-status-bar" key={i}>
                                                    <div className="file-type-logo"><FcFolder /></div>
                                                    <div className="file-info">
                                                        <span className="file-name">{data.name}</span>
                                                    </div>
                                                    <div className="file-remove" onClick={() => removeFile(data.name)}><strong><FaTrash /></strong></div>
                                            </Grid>
                                        )
                                    }
                                </Grid>
                            </Grid>
                        </div>
                        )
                }

            </Grid>
        )
    }

    const onCloseLevelModal = () => {
        setIsOpenLevelModal(false);
    }
    const onOpenLevelModal = () => {
        setIsOpenLevelModal(true);
    }


    return (<>
        <Grid container className={clsx(classes.rootGen, 'wh-full', 'infoTemplate')} spacing={3}>
            <Grid item xs={9}>
                <CardInline title={titleBasicInfor}>
                    <Grid container className="basic-info" spacing={2}>
                        <Grid item xs={4}>
                            <SelectFolderTree label={titleDir} ref={folderIdRef} value={detailsTemplateData?.folder_id} />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectStatusTree label={labelStatus} ref={statusTreeRef} value={detailsTemplateData?.c_status} />
                        </Grid>
                        <Grid item xs={4} className={classes.relative}>
                            <IconButton onClick={onOpenLevelModal} sx={{ zIndex: '999' }}>
                                <FaIdCard />
                            </IconButton>

                            <Input label={labelLevel} disabled={true} value={detailsTemplateData?.version.toString()} />



                        </Grid>
                    </Grid>
                    <Grid container className="basic-info" spacing={2}>
                        <Grid item xs={4}>
                            <InputDebounce label={labelDocNum} ref={inputDocNumRef} value={detailsTemplateData?.code} />
                        </Grid>
                        <Grid item xs={4}>
                            <InputDebounce label={labelDocNam} ref={inputDocNameRef} value={detailsTemplateData?.name} />
                        </Grid>
                        <Grid item xs={4}>
                            <InputDebounce label={labelCode} ref={inputCodeRef} value={detailsTemplateData?.identify_number} />
                        </Grid>
                    </Grid>
                    <Grid container className="basic-info" spacing={2}>
                        <Grid item xs={4}>
                            <SelectBlock label={labelBlock} ref={selectBlockRef} value={detailsTemplateData?.block_id} />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectDepartment label={labelRoom} ref={selectDepartmentRef} value={detailsTemplateData?.department_id} />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectTemplateType label={labelModel} ref={selectTemplateTypeRef} value={detailsTemplateData?.c_type} />
                        </Grid>
                    </Grid>
                    <Grid container className="basic-info">
                        <Grid item xs={12}>
                            <strong className="object-label">{labelObject}</strong>
                        </Grid>
                        <Grid item xs={12} className="object-select">
                            <Checkbox className="1"
                                options={[
                                    { label: "Khách hàng cá nhân", value: "1", checked: detailsTemplateData?.khcn_flag},
                                ]}
                                ref={khcn_flagRef}
                            />
                            <Checkbox
                                className="1"
                                options={[{ label: "Khách hàng doanh nghiệp", value: "2", checked:detailsTemplateData?.khdn_flag }]}
                                ref={khdn_flagRef}
                                 />
                            <Checkbox className="1"
                                options={[{ label: "Doanh nghiệp tư nhân", value: "3", checked:detailsTemplateData?.dntn_flag }]}
                                ref={dntn_flagRef}
                                 />
                            <Checkbox className="1"
                                options={[{ label: "Nội bộ SCB", value: "4", checked:detailsTemplateData?.scb_flag }]}
                                ref={scb_flagRef}
                                 />
                        </Grid>
                    </Grid>
                    <Grid container className="basic-info">
                        <Grid item xs={4} className="basic-info-item">
                            <Box component="div" className="mscb-general-picker-box">
                                <InputDate
                                    fullWidth
                                    label={labelDateHL}
                                    ref={startDateRef}
                                    value={isUpdate ? (new Date(detailsTemplateData?.start_date ?? '')) : new Date('')}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={4} className="basic-info-item">
                            <Box component="div" className="mscb-general-picker-box">
                                <InputDate fullWidth label={labelDateStop} ref={lastDateRef} value={isUpdate ? (new Date(detailsTemplateData?.end_date ?? '')) : new Date('')} />
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Input className='api-info' placeholder={t('Common.Enter')}
                                label={labelAPI}
                                ref={apiRef}
                                value={detailsTemplateData?.template_api} />
                        </Grid>
                    </Grid>
                    <Grid container className="basic-info">
                        <Grid item xs={12}>
                            <Box component="div" className="mscb-general-effect-label">
                                <Typography variant="subtitle1" color="var(--mscb-black)">{labelSys}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className="general-system_select">
                            <Box component="div" className={selectClass}>
                                <MuiSelect
                                    ref={systemSelectRef}
                                    multiple
                                    value={isUpdate ? systemName : []}
                                    variant="standard"
                                    onChange={handleChange}
                                    IconComponent={KeyboardArrowDown}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip
                                                    key={value}
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
                    </Grid>
                </CardInline>
            </Grid>
            <Grid item xs={3} className="upFile">
                <CardInline title={titleDow}>
                    <DropZone />
                </CardInline>
            </Grid>
        </Grid>
        <Dialog open={isOpenLevelModal} onClose={onCloseLevelModal} maxWidth={"lg"}>
            <DialogTitle>
                <Typography variant="h6"
                    color="var(--mscb-primary)"
                    className="mscb-add-modal-title text-upper">
                    {versionsModalTitle}
                </Typography>
                <IconButton
                    className={classes.iconClose}
                    aria-label="close"
                    onClick={onCloseLevelModal}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8
                    }}
                >
                    <IoMdClose />
                </IconButton>


            </DialogTitle>
            <DialogContent>
                <LevelTable
                    ref={tableRef}
                />
            </DialogContent>
        </Dialog>

    </>
    );
}

export default forwardRef(FormGeneralInfo);