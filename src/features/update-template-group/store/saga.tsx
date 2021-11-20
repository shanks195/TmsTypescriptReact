import { IApiPaging, IApiResponse } from "types";
import { call,put,takeEvery } from 'redux-saga/effects';
import { PayloadAction } from "@reduxjs/toolkit";
import { ON_FETCH_ERROR } from "utils/constants";
import history from "app/history";
import PAGE_URL from "app/PageURL";
import { appMessage, closeBackdrop, setAppNotification } from "features/app/store/slice";
import { IUpdatePayload, UpdateTemplateGroup } from "./../models/index";
import { IResponse } from "types/models/TemplateGroup";
import { fetchUpdateTemplateGroup, updateTemplateGroupFailure, updateTemplateGroupSuccess } from "./slice";
import { IInitPageGroup, ITemplatedata } from "types/models/Templatedata";
import { getTemplatedata } from "features/templatedata/models";
import { fetchTemplatedata, fetchTemplatedataFailure, fetchTemplatedataSuccess } from "features/templatedata/store/slice";


  function* handleUpdateTemplateGroup(action: PayloadAction<IUpdatePayload>) {
    try {
      const response: IApiResponse<IResponse> = yield call(UpdateTemplateGroup,action.payload.data,action.payload.id);
  
      if (response.success) {
        yield put(updateTemplateGroupSuccess(response.data as IResponse));
        yield put(setAppNotification(appMessage("Cập nhật dữ liệu thành công", 'success')));
        yield call(handleFetchTemplatedata,{
          payload:{
            limit:15,
            order_by:'asc',
            page:1
          },
          type:''
        })
        yield call(history.push,PAGE_URL.V2.FormGroup.main)
      } else {
        yield put(setAppNotification(appMessage(response.errors[0].msg, 'error')));
      }
    } catch (e) {
      yield put(updateTemplateGroupFailure(ON_FETCH_ERROR));
    }
    finally{
      yield put(closeBackdrop());
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
  export default function* UpdateTemplateGroupSaga(){
    yield takeEvery(fetchUpdateTemplateGroup.type, handleUpdateTemplateGroup);
    yield takeEvery(fetchTemplatedata.type, handleFetchTemplatedata);

  }