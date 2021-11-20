import { 
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';

import { Tab, Tabs } from '@mui/material';
import clsx from 'clsx';
import TabPanel from 'views/components/layout/TabPanel';
import SwipeableViews from 'react-swipeable-views';
import TabButton from 'views/components/layout/TabButton';

const DefinedTabs = [
  'product',
  'legal',
  'cic',
  'loan',
  'income',
  'collateral',
  'other',
  'xhtdnb'
];

export const findTabPosition = (tab: string) => {
  const pos = DefinedTabs.indexOf(tab);
  return !!~pos ? pos : 0;
}

export const findTabName = (pos: number) => {
  return !!DefinedTabs[pos] ? DefinedTabs[pos] : DefinedTabs[0];
}

export interface InitTabComponents{
  product: ReactNode;
  legal: ReactNode;
  cic: ReactNode;
  loan: ReactNode;
  income: ReactNode;
  collateral: ReactNode;
  other: ReactNode;
  xhtdnb: ReactNode;
}

export interface InitTabRef{
  getValue(): number;
}

export interface InitTabProps{
  className?: string;
  value?: number;
  onChange?(): void;
  onSave?(): void;
  components?: Partial<InitTabComponents>;
}

const InitTab: ForwardRefRenderFunction<InitTabRef, InitTabProps> = (props, ref) => {

  const { value, onChange, onSave, components, className } = props;
  const [ CurrentTab, setCurrentTab ] = useState(value ?? 0);
  const Current = useRef<number>(value ?? 0);

  useEffect(() => {
    value !== undefined && value !== CurrentTab && setCurrentTab(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ value ]);

  useEffect(() => {
    if (CurrentTab !== undefined && CurrentTab !== Current.current){
      Current.current = CurrentTab;
      onChange && onChange();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ CurrentTab ]);

  useImperativeHandle(ref, () => ({
    getValue: () => CurrentTab
  }));

  const changeTab = (e: SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  }

  const handleTabPanel = (index: number) => {
    setCurrentTab(index);
  }

  const handleClickSave = () => {
    onSave && onSave();
  }
console.log('Component Current Tab', CurrentTab)
  return <div className={ clsx('mscb-init-tab', className) }>
    <Tabs variant="fullWidth" value={ CurrentTab } indicatorColor="primary" onChange={ changeTab }>
      <Tab label="Nhóm sản phẩm" />
      <Tab label="Thông tin pháp lý" />
      <Tab label="Thông tin CIC" />
      <Tab label="Thông tin khoản vay" />
      <Tab label="Nguồn thu nhập" />
      <Tab label="Tài sản bảo đảm" />
      <Tab label="Hồ sơ khác" />
      <Tab label="XHTDNB" />
    </Tabs>
    <SwipeableViews axis="x" index={ CurrentTab } onChangeIndex={ handleTabPanel }>
      <TabPanel value={ CurrentTab } index={ 0 }>
        { components?.product }
      </TabPanel>
      <TabPanel value={ CurrentTab } index={ 1 }>
        { components?.legal }
      </TabPanel>
      <TabPanel value={ CurrentTab } index={ 2 }>
        { components?.cic }
      </TabPanel>
      <TabPanel value={ CurrentTab } index={ 3 }>
        { components?.loan }
      </TabPanel>
      <TabPanel value={ CurrentTab } index={ 4 }>
        { components?.income }
      </TabPanel>
      <TabPanel value={ CurrentTab } index={ 5 }>
        { components?.collateral }
      </TabPanel>
      <TabPanel value={ CurrentTab } index={ 6 }>
        {  components?.other}
      </TabPanel>
      <TabPanel value={ CurrentTab } index={ 7 }>
        { components?.xhtdnb }
      </TabPanel>
    </SwipeableViews>
    <TabButton onSave={ handleClickSave } />
  </div>

}

export default forwardRef(InitTab);