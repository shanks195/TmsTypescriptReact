import { IApiPaging, IApiResponse } from "types";
import { call,put,takeEvery } from 'redux-saga/effects';
import { PayloadAction } from "@reduxjs/toolkit";
import { ON_FETCH_ERROR } from "utils/constants";
import { appMessage, setAppNotification } from "features/app/store/slice";
import { handlecreateTemplateGroup } from "../models";
import { createTemplateGroup, createTemplateGroupFailure, createTemplateGroupSuccess } from "./slice";
import { IBodyTemplate, IResponse } from "types/models/TemplateGroup";
import { IInitPageGroup, ITemplatedata } from "types/models/Templatedata";
import { getTemplatedata } from "features/templatedata/models";
import { fetchTemplatedata, fetchTemplatedataFailure, fetchTemplatedataSuccess } from "features/templatedata/store/slice";


function* handleCreateNewTemplateGroup(action: PayloadAction<IBodyTemplate>) {
    try {
      const response: IApiResponse<IResponse> = yield call(handlecreateTemplateGroup,action.payload);
      if (response.success) {
        yield put(createTemplateGroupSuccess(response.data as IResponse));
        yield put(setAppNotification(appMessage("Thêm mới nhóm biểu mẫu thành công", 'success')));
        yield call(handleFetchTemplatedata,({
          payload:{
            limit:15,
            order_by:'asc',
            page:1
          },
          type:''
        })) 
      } else {
        yield put(setAppNotification(appMessage(response.errors[0].msg, 'error')));
      }
    } catch (e) {
      yield put(createTemplateGroupFailure(ON_FETCH_ERROR));
      yield put(setAppNotification(appMessage(ON_FETCH_ERROR[0].msg, 'error')));
    }
  }
function* handleFetchTemplatedata(action: PayloadAction<IInitPageGroup>){
    try{
      const res: IApiPaging<ITemplatedata> = yield call(getTemplatedata, action.payload);
  
      if (res.success){
        yield put(fetchTemplatedataSuccess(res.data as ITemplatedata));
      }
      else{
        yield put(fetchTemplatedataFailure(res.errors));
      }
    }
    catch(e){
      yield put(fetchTemplatedataFailure(ON_FETCH_ERROR));
    }
  }
  export default function* CreateTemplateGroupSaga(){
    yield takeEvery(createTemplateGroup.type, handleCreateNewTemplateGroup);
    yield takeEvery(fetchTemplatedata.type, handleFetchTemplatedata);

  }