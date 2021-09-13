import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Grid from "@mui/material/Grid";
import { InputRef } from 'views/components/base/Input';
import Checkbox from 'views/components/base/Checkbox';
import signStyle from "./style";

interface FormSignaturesProps {
}

interface FormManageSignaturesComponent extends React.FunctionComponent<FormSignaturesProps> { }

const FormManageSignatures: FormManageSignaturesComponent = () => {

    const classes = signStyle();
    const fileInputRef = useRef<InputRef>(null);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [validFiles, setValidFiles] = useState<File[]>([]);
    const [unsupportedFiles, setUnsupportedFiles] = useState<File[]>([]);

    const CheckboxState = [
        { id: 1, code: "Checkbox", name: ".png" },
        { id: 2, code: "Checkbox", name: ".jpg" }
    ];

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
            return false;
        }
        return true;
    }

    const handleFiles = (files: FileList) => {
        for (let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                setSelectedFiles((prevArray: File[]) => [...prevArray, files[i]]);
            } else {
                setSelectedFiles((prevArray: File[]) => [...prevArray, files[i]]);
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
        if (fileInputRef.current?.files.length) {
            handleFiles(fileInputRef.current?.files);
        }
    }

    const DropZone = () => {
        return (
            <div className={clsx(classes.rootDrop, 'wh-full')}>
                <Grid className="contain-drop">
                    <div className="containers">
                        <div className="drop-containers"
                            onDragOver={dragOver}
                            onDragEnter={dragEnter}
                            onDragLeave={dragLeave}
                            onDrop={fileDrop}
                            onClick={fileInputClicked}>
                            <div className="drop-message">
                                <div className="upload-icon">
                                </div>
                            </div>
                            <input
                                ref={fileInputRef as unknown as React.RefObject<HTMLInputElement>}
                                className="file-input"
                                type="file"
                                multiple
                                onChange={filesSelected}
                            />
                        </div>
                        <div className="file-display-containers">
                            {
                                validFiles.map((data: File, i: number) =>
                                    <div className="file-status-bar" key={i}>
                                        <Grid>
                                            <div className="file-type-logo"></div>
                                            <span className="file-name">{data.name}</span>
                                            <div className="file-remove" onClick={() => removeFile(data.name)}><strong>Xóa</strong></div>
                                        </Grid>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }

    return (
        <div className={clsx(classes.mainRoot, 'wh-full')}>
        <Grid className="signa-row">
                <Grid className="signa-format">
                    <span className="title">I. ĐỊNH DẠNG</span>
                    <p className="label-signa">1. Cập nhật chữ ký</p>
                    <DropZone />
                </Grid>
                <Grid className="signa-rule">
                    <span className="title-rule">II. ĐIỀU KIỆN</span>
                    <p className="label-signa">1. Định dạng</p>
                    <div className="format_option">
                        <Checkbox className="check-format"
                            options={
                                CheckboxState.map(item => ({
                                    value: item.id,
                                    label: item.name
                                }))
                            }
                        />
                    </div>
                </Grid>
        </Grid>
        </div>
    );
}

export default FormManageSignatures;