import { FC, lazy,Fragment } from "react";
import PAGE_URL from "app/PageURL";
import { useSelector } from "react-redux";
import { getIsAuth } from "features/auth/store/slice";
import { matchPath, useLocation,Navigate } from "react-router-dom";
import AppNotification from "./AppNotification";
import Backdrop from "views/components/base/Backdrop";


const Layout = lazy(() => import('./Layout'));

const Guard: FC = () => {
  const isAuth = useSelector(getIsAuth);
  const location = useLocation();
  const isLoginPage = matchPath(location.pathname, PAGE_URL.Login);
  
  if (!isAuth && !isLoginPage  ) {
    return <Navigate to={{pathname: PAGE_URL.Login }} state={{ from: location }} />;
  }


  return <Fragment>
    <AppNotification />
    <Layout/>
    <Backdrop />
  </Fragment>;
};

export default Guard;
