import { FC, ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';
import ObjectListCircle from './Circle';
import ObjectListMenu, { ObjectListMenuItem } from './Menu';

export interface ObjectListBoxProps{
  active?: boolean;
  bgPrimary?: boolean;
  circle?: ReactNode;
  enableUser?: boolean;
  enableMenu?: boolean;
  onClick?(): void;
  onClickMenu?(m: ObjectListMenuItem): void;
  menuWidth?: string;
  menu?: ObjectListMenuItem[];
}

const ObjectListBox: FC<ObjectListBoxProps> = props => {

  const { active, bgPrimary, children, circle, enableUser, enableMenu, onClick, onClickMenu, menuWidth, menu } = props;
  const [ isActive, setIsActive ] = useState(active ?? false);

  useEffect(() => {
    const is = !!active;
    is === isActive || setIsActive(is);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ active ]);

  return <div className={ clsx('object-list-box', { active }) } onClick={ onClick }>
    <ObjectListCircle enableUser={ enableUser } bgPrimary={ bgPrimary }>
      { circle }
    </ObjectListCircle>
    <div className="object-list-box-name">{ children }</div>
    <ObjectListMenu enable={ enableMenu } onClick={ onClickMenu } menuWidth={ menuWidth } menu={ menu } />
  </div>

}

export default ObjectListBox;