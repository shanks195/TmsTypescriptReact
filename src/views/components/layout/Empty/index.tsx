import { FC } from 'react';
import clsx from 'clsx';
import imgEmpty from 'assets/images/empty.svg';
import emptyStyle from './style';

export interface EmptyProps{
  className?: string;
}

const Empty: FC<EmptyProps> = props => {

  const classes = emptyStyle();
  const { children, className } = props;
  const cls = clsx(classes.root, className, 'wh-full flex-center flex-column text-center');

  return <div className={ cls }>
    <img src={ imgEmpty } alt="Empty" />
    { children }
  </div>

}

export default Empty;