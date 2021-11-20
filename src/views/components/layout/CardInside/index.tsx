import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import cardStyle from './style';

export interface CardInsideProps{
  className?: string;
  classBody?: string;
  title?: ReactNode;
  shadow?: boolean;
}

const CardInside: FC<CardInsideProps> = props => {

  const { className, classBody, title, children, shadow } = props;
  const classes = cardStyle();
  const cardClass = clsx(classes.CardInside, className, {
    'empty-title': !Boolean(title).valueOf()
  });
  const bodyClass = clsx(classBody, 'card-inside-body bg-white', { shadow });

  return <div className={ cardClass }>
    <div className={ bodyClass }>
      { children }
    </div>
    {
      !!title &&
      <fieldset>
        <legend>{ title }</legend>
      </fieldset>
    }
  </div>

}

export default CardInside;