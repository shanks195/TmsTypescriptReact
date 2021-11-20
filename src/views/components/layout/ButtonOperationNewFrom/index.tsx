import { Button } from '@mui/material';
import PAGE_URL from 'app/PageURL';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { formatPath } from 'utils';

export interface ButtonOperationNewFromProps {
  id: string;
  
  
  
}

const ButtonOperationNewFrom: FC<ButtonOperationNewFromProps> = props => { 


  const {children} = props
  return  <Link to={formatPath(PAGE_URL.V2.Operate.Detail.init)}>
    <Button
      variant="outlined"
      color="primary"
      type="button"
      style={{ height: '36px'}}
      size="small"
    >
      
      {children}
      
    </Button>
  </Link> 
}
export default ButtonOperationNewFrom;