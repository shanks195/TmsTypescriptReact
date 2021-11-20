import Grid from '@mui/material/Grid';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { InputRef } from '../Input';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { IoMdTrash } from 'react-icons/io';
import AlertMessage from 'views/components/layout/AlertMessage';
import uploadTypesStyle from './style';

export interface UploadFileTypeProps {
  clsName?: string;
  typeFile?: string; // video, image, audio
  needPlus?: boolean;
}

interface UploadFileTypeComponent
  extends React.FunctionComponent<UploadFileTypeProps> { }

const UploadFileType: UploadFileTypeComponent = (props) => {
  const { clsName, typeFile = "", children, needPlus } = props;
  const classes = uploadTypesStyle();
  const fileInputRef = useRef<InputRef>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [validFiles, setValidFiles] = useState<File[]>([]);
  const [unsupportedFiles, setUnsupportedFiles] = useState<File[]>([]);

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
    const validTypes = typeFile === 'image' ? ['image/jpg', 'image/jpeg', 'image/png', 'image/svg', 'image/HEIC'] : (typeFile === 'video' ? ['video/mp4', 'video/webm', 'video/wmv', 'video/f4v', 'video/avi'] :
      (typeFile === 'audio' ? ['audio/wav', 'audio/mp4', 'audio/mp3'] : []));
      if(validTypes===[]){
        return true;
      }
      else{
        if (validTypes.indexOf(file.type) === -1) {
          return false;
        }
        return true;
      }
  }

  const handleFiles = (files: FileList) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        setSelectedFiles((prevArray: File[]) => [...prevArray, files[i]]);
      } else {
        <AlertMessage open variant="error" autoClose>
          {String(`Không đúng định dạng file`)}
        </AlertMessage>
        // setSelectedFiles((prevArray: File[]) => [...prevArray, files[i]]);
        // setUnsupportedFiles((prevArray: File[]) => [...prevArray, files[i]]);
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

  return (
    <div className={clsName}>
      <Grid className={clsx(classes.rootUp, 'wh-full')}>
        <div className="containers">
          <div className="drop-containers"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
            onClick={fileInputClicked}>
            <div className="drop-message">
              <div className="upload-bg">
                <p className="ant-upload-drag-icon">{children}</p>
                {
                  needPlus
                    ?
                    <span className="upload-plus">
                      <BsFillPlusCircleFill />
                    </span>
                    : <></>
                }
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
                  <Grid sx={{ border: '1px solid #d9d9d9', borderRadius: '2px' }}>
                    <div className="file-type-logo">{children}</div>
                    <span className="file-name">{data.name}</span>
                    <div className="file-remove" onClick={() => removeFile(data.name)}><IoMdTrash /></div>
                  </Grid>
                </div>
              )
            }
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default UploadFileType;
