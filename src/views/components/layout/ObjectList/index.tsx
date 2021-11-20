import {
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { Tab, Tabs } from '@mui/material';
import clsx from 'clsx';
import ObjectListLabel from './Label';
import objectListStyle from './style';
import ObjectListBox from './Box';
import ObjectListAdd from './Add';
import { ObjectListMenuItem } from './Menu';

export interface ObjectListOption {
  circle?: ReactNode;
  label?: ReactNode;
  enableUser?: boolean;
  uuidLocal?: string;
}

export interface ObjectListRef {
  getValue(): number;
}

export interface ObjectListProps {
  className?: string;
  onAdd?(): void;
  onChange?(): void;
  current?: number;
  enableAdd?: boolean;
  enableLength?: boolean;
  enableMenu?: boolean;
  enableNumber?: boolean;
  labelLength?: ReactNode;
  options?: ObjectListOption[];
  onDelete?(): void;
  isDisable?: boolean;
  menu?: ObjectListMenuItem[];
  menuWidth?: string;
  onClickMenu?(menu: ObjectListMenuItem, position: number, uuidLocal: string): void;
  isDisableAdd?: boolean;
}

export interface ObjectListComponent extends ForwardRefRenderFunction<ObjectListRef, ObjectListProps> { }

export type { ObjectListMenuItem };

const ObjectList: ObjectListComponent = (props, ref) => {

  const { className,
    current,
    enableAdd = true,
    enableLength = true,
    enableMenu = true,
    labelLength,
    onAdd,
    onChange,
    options,
    enableNumber = true,
    isDisable = false,
    menu,
    menuWidth,
    onClickMenu,
    isDisableAdd = false
  } = props;
  const classes = objectListStyle();
  const [ObjectOptions, setObjectOptions] = useState<ObjectListOption[]>(options ?? []);
  const [CurrentObject, setCurrentObject] = useState(current ?? 0);

  useEffect(() => {
    const newCurrent = current ?? 0;
    newCurrent === CurrentObject || setCurrentObject(newCurrent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  useEffect(() => {
    options && setObjectOptions(options);
  }, [options]);


  useImperativeHandle(ref, () => ({
    getValue: () => CurrentObject
  }))

  useEffect(() => {
    onChange && onChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentObject]);

  const olClass = clsx(
    classes.ObjectList, 
    { 'disabled-length': !enableLength }, 
    className, 
    'flex items-center'
  );

  const changeObject = (e: SyntheticEvent, newValue: number) => {
    const target = e.target as HTMLElement;
    const isBackdrop = target.classList.contains('MuiBackdrop-root');
    const isMenu = target.classList.contains('MuiList-root');
    const isMenuItem = target.classList.contains('MuiMenuItem-root');
    if (isBackdrop || isMenu || isMenuItem) return false;
    newValue !== CurrentObject && setCurrentObject(newValue);
  }

  const clickMenu = (p: number, uuidLocal: string) => (m: ObjectListMenuItem) => {
    onClickMenu && onClickMenu(m, p, uuidLocal);
  }

  const currentValue = CurrentObject >= ObjectOptions.length ? ObjectOptions.length - 1 : CurrentObject;

  return <div className={olClass}>
    {!!enableLength && <ObjectListLabel
      className={clsx(classes.ObjectListLabel, "ObjectListLabel")}
      label={labelLength}
      number={enableNumber ? options?.length : undefined}
    />}
    <div className={clsx(classes.ObjectListContent, 'ObjectListContent')}>
      <Tabs
        variant="scrollable"
        value={currentValue}
        indicatorColor="primary"
        scrollButtons="auto"
        allowScrollButtonsMobile
        onChange={changeObject}
      >
        {ObjectOptions.map((option, index) => {
          return <Tab key={index} disabled={isDisable} label={

            <ObjectListBox 
              circle={option.circle} 
              enableUser={option.enableUser} 
              enableMenu={ enableMenu } 
              active={currentValue === index}
              menu={ menu }
              onClickMenu={ clickMenu(index, option?.uuidLocal ?? "") }
              menuWidth={ menuWidth }
            >
              {option.label}
            </ObjectListBox>
          } />
        })}
      </Tabs>
    </div>
    {!!enableAdd && <ObjectListAdd isDisable={isDisableAdd} className={clsx(classes.ObjectListAdd, 'ObjectListAdd')} onClick={onAdd} />}
  </div>;

}

export default forwardRef(ObjectList);