
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";

import { ITemplateFieldsState, ITemplateField, ITemplateFields, ITemplateGroups } from 'types/models/TemplateFields';

const initialState: ITemplateFieldsState = {
  data: {} as ITemplateField,
  loading:false,
  loaded:false,
  errors: [],
  current_template_id: 0
}

export interface ITemplateFieldsPayload<T> {
  localUuid: string;
  data: T;
}

const setITemplateGroupState = <K extends keyof ITemplateFieldsState, V extends ITemplateFieldsState[K]>(
  state: ITemplateFieldsState,
  payload: ITemplateFieldsPayload<V>,
  key: K,
) => {
  state.data.groups = state.data.groups.map((data, index)=>{

    return data
  })
  // state.info.data.collaterals = state.info.data.collaterals.map((data, index) =>{
  //     if (index === payload.collateralIndex) {
  //         data.items.map((item, itemIndex) => {
  //             if (itemIndex === payload.itemIndex) {
  //                 item[key] = payload.data;
  //             }
  //             return item;
  //         })
  //     }
  //     return data;
  // })
}


const TemplateFieldsSlice = createSlice({
  name: 'TemplateFields',
  initialState,
  reducers: {
    fetchTemplateFields(state, action:PayloadAction<number>){
      state.data = {} as ITemplateField;
      state.loaded = false;
      state.loading = true;
      state.errors = [];
    },
    fetchTemplateFieldsSuccess(state, action: PayloadAction<ITemplateField>){
      state.data = action.payload;
      state.errors = [];
      state.loading = false;
      state.loaded = true;
    },
    fetchTemplateFieldsFailure(state, action: PayloadAction<IError[]>){
      state.data = {} as ITemplateField;
      state.loading = false;
      state.loaded = true;
      state.errors = action.payload;
    },

    setCurrentTemplateId(state, action: PayloadAction<number>) {
      state.current_template_id = action.payload;
    },

    addNewGroupMetaDataDetail(state, action: PayloadAction<ITemplateGroups>){
      let groupNew = [...state.data.groups, action.payload];
      state.data.groups = groupNew;
    }
  }
});

  // Actions
export const fetchTemplateFields = TemplateFieldsSlice.actions.fetchTemplateFields;
export const fetchTemplateFieldsSuccess = TemplateFieldsSlice.actions.fetchTemplateFieldsSuccess;
export const fetchTemplateFieldsFailure = TemplateFieldsSlice.actions.fetchTemplateFieldsFailure;
export const setCurrentTemplateId = TemplateFieldsSlice.actions.setCurrentTemplateId;
export const addNewGroupMetaDataDetail = TemplateFieldsSlice.actions.addNewGroupMetaDataDetail;

// Selectors
export const getTemplateFields = (state: RootState) => state.TemplateFields.data;
export const isLoadingTemplateFields = (state: RootState) => state.TemplateFields.loading;
export const isLoadedTemplateFields = (state: RootState) => state.TemplateFields.loaded;
export const getCurrentTemplateId = (state: RootState) => state.TemplateFields.current_template_id;
export const getCurrentTemplate = (state: RootState): {
  group?: ITemplateGroups;
  field?: ITemplateFields;
} | undefined => {
  const currentId = state.TemplateFields.current_template_id;
  if(state.TemplateFields.data.groups?.find(g => g.id === currentId))
    return {
      group: state.TemplateFields.data.groups.find(g => g.id === currentId),
      field: undefined
    };
  else {
    let field: ITemplateFields | undefined = undefined; 
    state.TemplateFields.data.groups?.forEach(g => {
      field = g.items.find(f => f.id === currentId);
    });
    if(field)
      return { group: undefined, field };
    if(state.TemplateFields.data.template_fields?.find(f => f.id === currentId))
      return {
        group: undefined,
        field: state.TemplateFields.data.template_fields.find(f => f.id === currentId)
      };
  }
};

// Reducer
const TemplateFieldsReducer = TemplateFieldsSlice.reducer;

export default TemplateFieldsReducer;