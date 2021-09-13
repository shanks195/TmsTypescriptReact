import React from "react";
import Loading from "views/components/base/Loading";
import { useDispatch, useSelector } from "react-redux";
import { decodeToken, getLocalItem } from "utils";
import { APP_TOKEN_NAME } from "utils/constants";

import {
  accessToken,
  getIsAuth,
  getIsInitial,
  initial
} from "features/auth/store/slice";

export interface AuthContextProps {
  children?: React.ReactNode;
}

const AuthContext: React.FC<AuthContextProps> = (props) => {
  const isAuth = useSelector(getIsAuth);
  const isInitial = useSelector(getIsInitial);
  const dispatch = useDispatch();

  const { children } = props;

  React.useEffect(() => {console.log('Auth Context')
    try {
      if (!isAuth) {
        const { token, userid } = decodeToken(
          getLocalItem(APP_TOKEN_NAME) ?? ""
        );

        if (token && userid) {
          dispatch(accessToken(userid.toString()));
        } else {
          dispatch(initial({ isAuth: false }));
        }
      } else {
        isInitial || dispatch(initial({ isAuth: true }));
      }
    } catch (e) {console.log(e)
      dispatch(initial({ isAuth: false }));
    }
  });

  if (!isInitial) {
    return <Loading />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default React.memo(AuthContext);
