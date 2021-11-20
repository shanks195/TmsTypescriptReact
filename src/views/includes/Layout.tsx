import { FC, Fragment, memo } from 'react';
import Sidebar from 'views/components/layout/Sidebar';
import ContentWrapper from 'views/components/layout/ContentWrapper';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'features/auth/store/slice';

const Layout: FC = () => {

  const isAuth = useSelector(getIsAuth);

  if (!isAuth) return null;

  return <Fragment>
    <Sidebar />
    <ContentWrapper />
  </Fragment>;

}

export default memo(Layout);