import { FC } from 'react';
import User from './User';
import Message from './Message';
import Notify from './Notify';
import EventList from './EventList';
import Language from '../Language';
// import SelectCurrency from '../SelectCurrency';

const TopbarRight: FC = () => {

  return <div className="mscb-topbar-right absolute right top h-full flex items-center">
    {/* <SelectCurrency /> */}
    <Language variant="outlined" />
    <EventList />
    <Notify />
    <Message />
    <User />
  </div>

}

export default TopbarRight;