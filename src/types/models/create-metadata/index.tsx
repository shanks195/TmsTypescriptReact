import { IError } from "types";
export interface IMetadataPayload{
  data:IMetadataBody
  id: string
}
export interface IMetadataBody {
  code: string; // Required - Code of metadata
  name: string; // Required - Name of metadata
  // list_c_system_type: string[]; // Required - system_type of metadata. In range [1:3] with 1:CRM, 2:LOS, 3:HRM
  active_flag: boolean; // Required - active_flag of metadata
  note: string; // Required - note of metadata (Nullable)
  output_edit_flag: boolean; // Required - output_edit_flag of metadata
  metadata_group_id: number; // Required - metadata_group_id of metadata
  input_type_format_id: number; // Required - input_type_format_id of metadata
}

export interface IMetadataResponse{
  id: number;
  name: string;
  created_by: string;
}
export interface IResponseState {
  loading:boolean,
  loaded:boolean,
  data:IMetadataResponse | null
}

export interface IMetadataState {
  response: IResponseState;
  errors: IError[];
}
