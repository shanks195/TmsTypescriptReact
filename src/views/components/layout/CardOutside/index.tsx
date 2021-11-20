import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import outsideStyle from './style';

export interface CardOutsideProps{
  className?: string;
  extra?: ReactNode;
  extraClass?: string;
  id?: string;
  label?: ReactNode;
}

const CardOutside: FC<CardOutsideProps> = props => {

  const classes = outsideStyle();
  const { children, className, extra, extraClass, id, label } = props;
  const cardClass = clsx(classes.root, 'mscb-outside-card relative', className);

  return <div className={ cardClass } id={ id }>
    {
      !!label && 
      <div className={ clsx(classes.label, 'mscb-outside-card-label ellipsis bg-white text-upper text-primary') }>
        { label }
      </div>
    }
    {
      !!extra &&
      <div className={ clsx('mscb-outside-card-extra', extraClass) }>
        { extra }
      </div>
    }
    <div className={ clsx(classes.content, 'mscb-outside-card-content shadow bg-white') }>
      { children }
    </div>
  </div>

}

export default CardOutside;