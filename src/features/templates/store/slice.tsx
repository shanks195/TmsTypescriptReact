
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { 
  ITemplateOperateListState, 
  IInitPage, 
  ITemplateOperate, 
  IDetailTemplateOperate 
} from "types/models/Templates";

const initialState: ITemplateOperateListState = {
  list: {
    items: [],
    page: 0,
    total_page: 0,
    total_record: 0,
    start_date: '',
    end_date: ''
  },
  fetching: false,
  fetched: false,
  filters: {
    limit: 15,
    current_page: 0,
    sort: 0,
    name: '',
    start_date: '',
    end_date: '',
  },
  detail: {
    fetching: false,
    fetched: false,
    list: undefined,
    errors: [],
  },
  errors: []
}

export interface IFilerPayload<T> {
  data: T;
}

const TemplatesSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    setTemplateListCurrentPage(state, action: PayloadAction<number>) {
      state.filters.current_page = action.payload;
    },
    setTemplateListSort(state, action: PayloadAction<number>) {
      state.filters.sort = action.payload;
    },
    setTemplateListLimit(state, action: PayloadAction<number>) {
      state.filters.limit = action.payload;
    },
    setTemplateListName(state, action: PayloadAction<string>) {
      state.filters.name = action.payload;
    },
    setTemplateListStartDate(state, action: PayloadAction<string>) {
      state.filters.start_date = action.payload;
    },
    setTemplateListEndDate(state, action: PayloadAction<string>) {
      state.filters.end_date = action.payload;
    },
    fetchTemplateList(state, _action: PayloadAction<IInitPage>) {
      state.fetching = true;
      state.fetched = false
      state.list.items = [];
    },
    fetchTemplateListSuccess(state, action: PayloadAction<ITemplateOperate>) {
      state.list = action.payload;
      state.list.total_page = action.payload.total_page;
      state.fetched = true
      state.fetching = false;
    },
    fetchTemplateListFailure(state, action: PayloadAction<IError[]>) {
      state.errors = action.payload;
      state.fetching = false;
      state.fetched = true;
    },
    // DETAIL METADATA
    fetchTemplateListDetail(state, action: PayloadAction<string>) {
      state.detail.list = undefined;
      state.fetching = true;
      state.fetched = false;
      state.errors = [];
    },
    fetchTemplateListDetailSuccess(state, action: PayloadAction<IDetailTemplateOperate>) {
      state.detail.list = action.payload;
      state.fetched = true;
      state.fetching = false;
      state.errors = [];
    },
    fetchTemplateListDetailFailure(state, action: PayloadAction<IError[]>) {
      state.detail.list = undefined;
      state.errors = action.payload;
      state.fetching = false;
      state.fetched = true;
    },
    clearDetail(state) {
      state.detail.list = undefined;
      state.fetching = false;
      state.fetched = false;
      state.errors = []
    },
    deleteTemplateList(state, action: PayloadAction<string | number>) {
      const index = state.list.items.findIndex(i => i.id === action.payload)
      state.list.items.splice(index, 1)
    },
    setCurrentTemplateId(state, action: PayloadAction<number>) {
      state.current_template_id = action.payload;
    }
  }
});

// Actions
export const setTemplateListCurrentPage = TemplatesSlice.actions.setTemplateListCurrentPage;
export const setTemplateListSort = TemplatesSlice.actions.setTemplateListSort;
export const setTemplateListLimit = TemplatesSlice.actions.setTemplateListLimit;
export const setTemplateListName = TemplatesSlice.actions.setTemplateListName;
export const setTemplateListStartDate = TemplatesSlice.actions.setTemplateListStartDate;
export const setTemplateListEndDate = TemplatesSlice.actions.setTemplateListEndDate;
export const fetchTemplateList = TemplatesSlice.actions.fetchTemplateList;
export const fetchTemplateListSuccess = TemplatesSlice.actions.fetchTemplateListSuccess;
export const fetchTemplateListFailure = TemplatesSlice.actions.fetchTemplateListFailure;
export const clearDetail = TemplatesSlice.actions.clearDetail;
export const deleteTemplateListAction = TemplatesSlice.actions.deleteTemplateList;

// DETAIL METADATA ACTIONS
export const fetchTemplateListDetail = TemplatesSlice.actions.fetchTemplateListDetail;
export const fetchTemplateListDetailSuccess = TemplatesSlice.actions.fetchTemplateListDetailSuccess;
export const fetchTemplateListDetailFailure = TemplatesSlice.actions.fetchTemplateListDetailFailure;

// Selectors
export const getTemplatesList = (state: RootState) => state.templateOperate.list;
export const isLoadingTemplatesList = (state: RootState) => state.templateOperate.fetching;
export const isLoadedTemplatesList = (state: RootState) => state.templateOperate.fetched;
export const getTemplateListTotalPage = (state: RootState) => state.templateOperate.list.total_page;
export const getTemplateListCurrentPage = (state: RootState) => state.templateOperate.filters.current_page;
export const getTemplateListLimit = (state: RootState) => state.templateOperate.filters.limit;
export const getTemplateListName = (state: RootState) => state.templateOperate.filters.name;
export const getTemplateListSort = (state: RootState) => state.templateOperate.filters.sort;
export const getTemplateListStartDate = (state: RootState) => state.templateOperate.filters.start_date;
export const getTemplateListEndDate = (state: RootState) => state.templateOperate.filters.end_date;

// DETAIL METDATA SELECTORS
export const getDetailTemplateList = (state: RootState) => state.templateOperate.detail.list;
export const isFetchingDetailTemplateList = (state: RootState) => state.templateOperate.detail.fetching;
export const isFetchedDetailTemplateList = (state: RootState) => state.templateOperate.detail.fetched;

// Reducer
const TemplatesReducer = TemplatesSlice.reducer;

export default TemplatesReducer;