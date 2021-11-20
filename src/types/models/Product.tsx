import { IError, IListState, IPostRequest } from "types";

export interface IProductDetail{
  product_detail_id: string;
  product_detail_code: string | null;
  product_detail_name: string;
}

export interface IProductTypeBase{
  product_type_id: string;
  product_type_code: string | null;
  product_type_name: string;
}

export interface IProductCategoryBase{
  product_category_id: string;
  product_category_code: string | null;
  product_category_name: string;
}

export interface IProductType extends IProductTypeBase{
  loan_product_detail_info_list: IProductDetail[];
}

export interface IProductCategory extends IProductCategoryBase{
  loan_product_type_info_list: IProductType[];
}

export interface IProductValue{
  category: IProductCategoryBase;
  type: IProductTypeBase;
  detail: IProductDetail;
}

export interface IPartnerCode{
  loan_affiliate_partner_id: string;
  loan_affiliate_partner_code: string;
  loan_affiliate_partner_name: string;
}

export interface ICategoryState{
  list: IProductCategory[];
  fetching: boolean;
  fetched: boolean;
}

export interface IPartnerProductBase{
  loan_affiliate_partner_product_category_id: string;
  loan_affiliate_partner_product_category_code: string;
  loan_affiliate_partner_product_category_name: string;
}

export interface IPartnerProduct extends IPartnerProductBase{
  display_order: number;
}

export interface IProductInfo{
  loan_product_category_info: IProductCategoryBase;
  loan_product_type_info: IProductTypeBase;
  loan_product_detail_info: IProductDetail;
}

export interface IPartnerInfo{
  loan_affiliate_partner_info: IPartnerCode;
  loan_affiliate_partner_product_category_info: IPartnerProductBase;
}

export interface IDocumentInfo{
  collateral_flag: boolean;
  exception_document_flag: boolean;
}

export interface IProductPost<T> extends IProductValue, IDocumentInfo{
  partnerCode: IPartnerCode;
  partnerProduct: T;
}

export interface IProductData{
  loan_product_info: IProductInfo;
  loan_product_affiliate_partner_info: IPartnerInfo;
  loan_document_info: IDocumentInfo;
}

export interface IProductLoan extends IPostRequest{
  data: IProductData;
}

export interface IURLProductParams{
  id: string;
  tab: string;
  step?: string;
  step1?: string;
  step2?: string;
  step3?: string;
  step4?: string;
}

export interface IProductState{
  category: ICategoryState;
  partnerCode: IListState<IPartnerCode>;
  partnerProduct: IListState<IPartnerProduct>;
  post: IProductPost<IPartnerProductBase> & IPostRequest;
  errors: IError[];
}