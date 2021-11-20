import { FC } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import OperateForm from './OperateForm';
import ReviewForm from './ReviewForm';
import PAGE_URL from 'app/PageURL';
import OperateList from './OperateList';

const Operate: FC = () => {

  return <Routes>
    <Route path=":id" element={<Outlet/>}>
      <Route index element={ <OperateList/> } />
      <Route path={PAGE_URL.V2.Operate.Detail.init} element={ <OperateForm isUpdate={false}/> } />
      <Route path={PAGE_URL.V2.Operate.Detail.operateReview} element={<ReviewForm />}/>
      <Route path={PAGE_URL.V2.Operate.Detail.edit} element={<OperateForm isUpdate={true}/>}/>
    </Route>
  </Routes>

}

export default Operate;