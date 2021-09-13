import React from 'react';
import clsx from 'clsx';

export interface FlagIconProps{
  className?: string;
  code: string;
}

const FlagIcon: React.FC<FlagIconProps> = props => {

  const { className, code } = props;
  const iconClass = clsx('mscb-flag-icon flag-icon', 'flag-icon-' + code, className);

  return <span className={ iconClass } />

}

export default FlagIcon;