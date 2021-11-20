import { FC, Fragment, ReactNode, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decodeToken } from "utils";
import Loading from "views/components/base/Loading";
import { matchPath, Navigate, useLocation } from "react-router";

import {
  getIsAuth,
  getIsFetched,
  getIsInitial,
  initial,
  getIsFetching,
  accessToken
} from "features/auth/store/slice";

export interface AuthContextProps {
  children?: ReactNode;
}

const AuthContext: FC<AuthContextProps> = (props) => {
  const isAuth = useSelector(getIsAuth);
  const isInitial = useSelector(getIsInitial);
  const isFetched = useSelector(getIsFetched);
  const isFetching = useSelector(getIsFetching)
  const location = useLocation()
  const dispatch = useDispatch();

  const { children } = props;

  useEffect(() => {
    try {
      if (!isAuth) {
        if (!isFetched){
          const { token, userid } = decodeToken();
  
          if (token && userid) {
            isFetching || dispatch(accessToken());
            // dispatch(loginSuccess('Fullname'));
          } else {
            dispatch(initial({ isAuth: false }));
          }
        }
        else{
        isFetched || dispatch(initial({ isAuth: false }));
        }
      } else {
        isInitial || dispatch(initial({ isAuth: true }));
      }
    } catch (e) {
      dispatch(initial({ isAuth: false }));
    }
  });

  if (!isInitial) {
    return <Loading />;
  }
  if (isAuth && matchPath('/login', location.pathname)){
    return <Navigate to="/" />
  }
  return <Fragment>{children}</Fragment>;
};

export default memo(AuthContext);
