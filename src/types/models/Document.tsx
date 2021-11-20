import { ICodeName } from "types/base";
import { IProductData } from "./Product";

export type DocumentStepID = 
  | 'NHOM_SAN_PHAM';

export type DocumentStepName = 
  | 'NHÓM SẢN PHẨM';

export interface IDocumentStep<T>{
  id: DocumentStepID,
  name: DocumentStepName;
  uuid: string;
  data: T;
}

export interface ILoanDocument{
  display_order: number;
  document: ICodeName;
  customer_name: string;
  status: ICodeName;
  business_unit: ICodeName;
  update_date: number;
}

export interface IDocumentLOSInfo{
  los_id: string;
  los_uuid: string;
  sequence_id: null;
  sequence_uuid: null;
}

export interface IDocumentForm{
  cic_form: null;
  collateral_form: null;
  legal_info_form: null;
  loan_type: ICodeName;
  los_info: IDocumentLOSInfo;
  other_profile: null;
  product_group_form: IDocumentStep<IProductData>;
  source_income_form: null;
}

export interface IDocumentPost{
  form: IDocumentForm;
}