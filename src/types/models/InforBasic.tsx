import { IError, IListProp } from '../api';

export interface IFolder{
  folder_id: number;
  folder_code: string;
  folder_name: string;
}
export interface IStatus{
  status_code: string;
  status_name: string;
}
export interface IVersion {
  version_code: string;
  version_name: string;
}
export interface ITextNumber {
  textnumber_code: string;
  textnumber_name:string;
}
export interface IDeclarationForm {
  IDeclarationForm_code: string;
  IDeclarationForm_name:string;
}
export interface IIdentifier {
  Identifier_code :string;
  Identifier_name:string;
}
export interface IBlock {
  block_code:number ;
  block_name:string;
}
export interface IRoom {
  room_code:number;
  room_name:string;
}
export interface ISampleType {
  sampletype_code :string;
  sampletype_name: string;

}
export interface IInforBasicValue{
  folder: IFolder;
  status: IStatus;
  version: IVersion;
  textNumber:ITextNumber;
  declarationForm:IDeclarationForm;
  identifier: IIdentifier;
  block:IBlock;
  room:IRoom;
  sampleType:ISampleType;
}

export interface IInforBasicState{
  folders: IFolder[];
  statuses:IStatus[];
  versions:IVersion[];
  textNumbers:ITextNumber[];
  declarationForms:IDeclarationForm[];
  identifiers:IIdentifier[];
  blocks: IBlock[];
  rooms:IRoom[];
  sampleTypes:ISampleType[];
  loadingFolder: boolean;
  loadedFolder: boolean;
  loadingStatus:boolean;
  loadedStatus:boolean;
  loadingVersion:boolean;
  loadedVersion:boolean;
  loadingTextNumber:boolean;
  loadedTextNumber:boolean;
  loadingDeclarationForm:boolean;
  loadedDeclarationForm:boolean;
  loadedIdentifier:boolean;
  loadingIdentifier:boolean;
  loadedBlock:boolean;
  loadingBlock:boolean;
  loadedRoom:boolean;
  loadingRoom:boolean;
  loadedSampleType:boolean;
  loadingSampleType:boolean;
  errors: IError[];
}