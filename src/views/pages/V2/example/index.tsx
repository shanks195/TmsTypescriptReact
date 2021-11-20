import { FC } from 'react';
// import { useDispatch } from 'react-redux';

import CardOutside from 'views/components/layout/CardOutside';
import FormSourceDataInfo from '../Operate/OperateForm/SourceDataInfo';
// import NewProperty from '../Operate/OperateList/NewProperty';
// import { clearDetail } from 'features/templatedata/store/slice';
// import history from 'app/history';
// import PAGE_URL from 'app/PageURL';

const Example: FC = () => {
  // const dispatch = useDispatch();
  // const [
  //   isOpenLevelModal, 
  //   setIsOpenLevelModal] = useState<boolean>(false);

  // const onCloseLevelModal = () => {
  //   setIsOpenLevelModal(false);
  //   history.push(PAGE_URL.V2.FormGroup.main);
  //   dispatch(clearDetail());
  // };

  return <>
    <CardOutside label={""}>
      <FormSourceDataInfo/>
    </CardOutside>

    <h2>TABLE VẬN HÀNH</h2>
    <hr />
    {/* <NewProperty onClose={onCloseLevelModal}/> */}
  </>;
};

export default Example;
