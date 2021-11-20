import { IFileBlob } from "types/models/Upload";
import { blobToFile } from "utils";

export const uploadSingle = (fileBlob: IFileBlob) => {
  const file = blobToFile(fileBlob);
//   const form = new FormData();
//   form.append('file', file);
//   form.append('username', 'ABC');
  console.log("Passed Redux toolkit and Saga to upload", file);
};
