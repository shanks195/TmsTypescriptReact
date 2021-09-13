import { FunctionComponent, useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { InputRef } from "views/components/base/Input";
// import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import uploadStyle from "./style";
import { FcFolder } from "react-icons/fc";
import { FaTrash } from "react-icons/fa";
import {ImAttachment} from "react-icons/im"
// import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface UploadFileProps {
  className?: string;
  attach?: boolean;
}

interface UploadFileComponent extends FunctionComponent<UploadFileProps> {}

const UploadFile: UploadFileComponent = (props) => {
  const { className, attach = false } = props;

  const classes = uploadStyle();

  const UploadFileClass = clsx(classes.root, "mscb-upload", className);

  const fileInputRef = useRef<InputRef>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [validFiles, setValidFiles] = useState<File[]>([]);
  const [unsupportedFiles, setUnsupportedFiles] = useState<File[]>([]);

  useEffect(() => {
    const filteredArray: File[] = selectedFiles.reduce(
      (file: File[], current: File) => {
        const x = file.find((item: File) => item.name === current.name);
        if (!x) {
          return file.concat([current]);
        } else {
          return file;
        }
      },
      []
    );
    setValidFiles([...filteredArray]);
  }, [selectedFiles]);

  const dragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const dragEnter = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const dragLeave = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const fileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };

  const validateFile = (file: File) => {
    const validTypes = ["image/jpg", "image/png"];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  // const fileSize = (size: number) => {
  //     if (size === 0) return '0 Bytes';
  //     const k = 1024;
  //     const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  //     const i = Math.floor(Math.log(size) / Math.log(k));
  //     return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  // }

  // const fileType = (fileName: string) => {
  //     return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
  // }

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
  };
  const removeFile = (name: string) => {
    const validFileIndex = validFiles.findIndex((e: File) => e.name === name);
    validFiles.splice(validFileIndex, 1);
    // update validFiles array
    setValidFiles([...validFiles]);
    const selectedFileIndex = selectedFiles.findIndex(
      (e: File) => e.name === name
    );
    selectedFiles.splice(selectedFileIndex, 1);
    // update selectedFiles array
    setSelectedFiles([...selectedFiles]);
    const unsupportedFileIndex = unsupportedFiles.findIndex(
      (e: File) => e.name === name
    );
    if (unsupportedFileIndex !== -1) {
      unsupportedFiles.splice(unsupportedFileIndex, 1);
      // update unsupportedFiles array
      setUnsupportedFiles([...unsupportedFiles]);
    }
  };

  const fileInputClicked = () => {
    fileInputRef.current?.click();
  };

  const filesSelected = () => {
    if (fileInputRef.current?.files.length) {
      handleFiles(fileInputRef.current?.files);
    }
  };
  return (
    <div className={UploadFileClass}>
      <div className={classes.uploadContainer}>
        {attach ? (
          <div>
            <span
            className="file-attachment"
              onClick={fileInputClicked}
            >
              <ImAttachment className="mr-2"/>Tệp đính kèm
            </span>
            <input
              ref={fileInputRef as unknown as React.RefObject<HTMLInputElement>}
              className={classes.fileInput}
              type="file"
              multiple
              onChange={filesSelected}
            />
          </div>
        ) : (
          <div
            className="drop-containers"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
            //   onClick={fileInputClicked}
          >
            <div className="drop-message">
              <p>
                Thả (các) tệp của bạn vào đây hoặc{" "}
                <span className="message-link" onClick={fileInputClicked}>
                  tải lên
                </span>
              </p>
              <div className="upload-icon">
                Dung lượng tối đa 20MB
                <Button
                  className="upload-button"
                  onClick={fileInputClicked}
                  variant="contained"
                >
                  File
                </Button>
              </div>
            </div>
            <input
              ref={fileInputRef as unknown as React.RefObject<HTMLInputElement>}
              className={classes.fileInput}
              type="file"
              multiple
              onChange={filesSelected}
            />
          </div>
        )}
        <div className={classes.fileDisplayContainers}>
          {validFiles.map((data: File, i: number) => (
            <div className="file-status-bar" key={i}>
              <div className="file-type-logo">
                <FcFolder />
              </div>
              <div className="file-info">
                <span className="file-name">{data.name}</span>
                <Box
                  className="file-progress"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {/* <Box sx={{ width: "100%", mr: 1 }}>
                    <LinearProgress variant="determinate" {...props} />
                  </Box> */}
                  <Box className="file-progress-info" sx={{ minWidth: 35 }}>
                    <Typography variant="body2" className="capacity">
                      {data.size % 1024}kb
                    </Typography>
                    {/* <Typography
                      variant="body2"
                      color="text.secondary"
                    >{`${Math.round(80)}%`}</Typography> */}
                  </Box>
                </Box>
              </div>
              <div
                className="file-remove"
                onClick={() => removeFile(data.name)}
              >
                <strong>
                  <FaTrash />
                </strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
