import { ForwardRefRenderFunction, ReactNode, useEffect, useRef, useState } from 'react';
import { Alert, AlertColor, Snackbar } from '@mui/material';
import alertMessageStyle from "./style";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreateIcon from '@mui/icons-material/Create';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorIcon from '@mui/icons-material/Error';
import { useTranslation } from 'react-i18next';

export type Horizontal = 'left' | 'center' | 'right';

export type Vertical = 'top' | 'bottom';

export type AlertMessagePosition = 
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface AlertMessageRef{

}

export interface AlertMessageProps{
  position?: AlertMessagePosition;
  open?: boolean;
  onClose?(): void;
  variant?: AlertColor;
  children?: ReactNode;
  autoClose?: boolean;
  icon?: ReactNode;
  status?: string;
}

const AlertMessage: ForwardRefRenderFunction<AlertMessageRef, AlertMessageProps> = (props, ref) => {

  const { position = 'top-right', open, onClose, variant = "info", children, autoClose } = props;

  const { t } = useTranslation();
  const mounted = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const classes = alertMessageStyle();
  const [ isOpen, setIsOpen ] = useState(Boolean(open).valueOf());

  useEffect(() => {
    mounted.current = true;

    timer.current && clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      autoClose && handleClose();
      timer.current && clearTimeout(timer.current);
    }, 5000);

    return () => {
      mounted.current = false;
    }
  });

  const handleClose = () => {
    if (open === undefined || onClose === undefined){
      setIsOpen(false);
    }
    else{
      onClose();
    }
  }

  const org = position.split('-');

  const renderIcon = () => {
    switch (variant) {
        case 'error':
            return <CancelIcon />
        case 'success':
            return <CheckCircleIcon />
        case 'info':
            return <CreateIcon />
        case 'warning':
            return <ErrorIcon />
    }
  }

  return <Snackbar
    anchorOrigin={{
      horizontal: org[1] as Horizontal,
      vertical: org[0] as Vertical
    }}
    open={ isOpen }
    onClose={ handleClose }
    key={ org.join('') }
    autoHideDuration={ 2000 }
    className={classes.root}
  >
    <Alert 
      onClose={ handleClose } 
      severity={ variant } 
      sx={{ width: '100%' }} 
      icon={ renderIcon() }
    >
      { t(`${children}`) }
    </Alert>
  </Snackbar>

}

export default AlertMessage;