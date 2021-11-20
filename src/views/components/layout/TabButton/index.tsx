import { FC } from 'react';
import Button from '@mui/material/Button';

export interface TabButtonProps{
  onSave?(): void;
  onBack?(): void;
}

const TabButton: FC<TabButtonProps> = props => {

  const { onSave, onBack } = props;

  const onClickSave = () => {
    onSave && onSave();
  }
  const onClickBack = () =>{
    onBack && onBack();
  }

  return <div className="text-right pt-5">
    <Button variant="contained" className="ml-4 rounded-0 btn-gray">Thoát</Button>
    <Button variant="contained" className="ml-4 rounded-0" color="secondary" onClick={ onClickBack }>Quay lại</Button>
    <Button variant="contained" className="ml-4 rounded-0" color="success" onClick={ onClickSave }>Lưu</Button>
    <Button variant="contained" className="ml-4 rounded-0" color="primary">Tiếp tục</Button>
  </div>

}

export default TabButton;