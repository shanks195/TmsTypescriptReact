import React from "react";
import PAGE_URL from "app/PageURL";
import { useSelector } from "react-redux";
import { getIsAuth } from "features/auth/store/slice";
import { matchPath, Redirect, useLocation } from "react-router-dom";

const Layout = React.lazy(() => import('./Layout'));

const Guard: React.FC = () => {
  const isAuth = useSelector(getIsAuth);
  const location = useLocation();
  const isLoginPage = matchPath(location.pathname, PAGE_URL.Login);

  if (!isAuth && !isLoginPage) {
    return <Redirect to={PAGE_URL.Login} />;
  }

  return <Layout />;
};

export default Guard;
