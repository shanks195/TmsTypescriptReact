import React from 'react';
import clsx from 'clsx';
import outsideStyle from './style';

export interface CardOutsideProps{
  className?: string;
  extra?: React.ReactNode;
  id?: string;
  label?: React.ReactNode;
}

const CardOutside: React.FC<CardOutsideProps> = props => {

  const classes = outsideStyle();
  const { children, className, extra, id, label } = props;
  const cardClass = clsx(classes.root, 'mscb-outside-card relative', className);

  return <div className={ cardClass } id={ id }>
    {
      !!label && 
      <div className={ clsx(classes.label, 'ellipsis bg-white text-upper text-primary') }>
        { label }
      </div>
    }
    {
      !!extra &&
      <div className="absolute right top">
        { extra }
      </div>
    }
    <div className={ clsx(classes.content, 'shadow bg-white') }>
      { children }
    </div>
  </div>

}

export default CardOutside;