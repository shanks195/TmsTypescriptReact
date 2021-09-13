import { FC, useRef, useState, useEffect, MouseEvent, useMemo } from "react";
import { Link } from "react-router-dom";
import { getIsAuth, getIsFetching, login } from "features/auth/store/slice";
import { useDispatch, useSelector } from "react-redux";
import { IValidate } from "types";
import { getValidate } from "utils";
import { useTranslation } from "react-i18next";
import Input, { InputRef } from "views/components/base/Input";
import Checkbox, { CheckboxRef } from "views/components/base/Checkbox";
import clsx from "clsx";
import loginStyle from "./style";
import history from "app/history";
import PAGE_URL from "app/PageURL";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Loading from "views/components/base/Loading";
import Language from "views/components/layout/Language";

const LoginPage: FC = () => {
  const classes = loginStyle();

  const username =useRef<InputRef>(null);
  const password =useRef<InputRef>(null);
  const remember =useRef<CheckboxRef>(null);

  const isFetching = useSelector(getIsFetching);
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [ showPassword, setShowPassword ] =useState<boolean>(false);
  const [ msgUsername, setMsgUsername ] =useState<IValidate>(getValidate());
  const [ msgPassword, setMsgPassword ] =useState<IValidate>(getValidate());

 useEffect(() => {console.log(isAuth)
    isAuth && history.push(PAGE_URL.Dashboard);
  }, [ isAuth ]);

  const labelUsername = t('Pages.Login.Username');
  const labelPassword = t('Pages.Login.Password');
  const labelEnter = t('Common.Enter');
  const labelRemember = t('Pages.Login.Remember');

  const getUsername = () => username.current?.getValue() ?? '';
  const getPassword = () => password.current?.getValue() ?? '';

  const validateUsername = () => {
    if (!getUsername().length){
      setMsgUsername(getValidate('Common.Error.Empty', { name: labelUsername }));
      return false;
    }

    setMsgUsername(getValidate());
    return true;
  }

  const validatePassword = () => {
    const _password = getPassword();

    if (!_password.length){
      setMsgPassword(getValidate('Common.Error.Empty', { name: labelPassword }));
      return false;
    }

    if (_password.length < 8){
      setMsgPassword(getValidate('Common.Error.MinLength', { name: labelPassword, length: 8 }));
      return false;
    }

    setMsgPassword(getValidate());
    return true;
  }

  const validate = () => validateUsername() && validatePassword();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();

  const handleClickLogin = () => {
    if (isFetching || !validate()) return;

    const data = {
      username: getUsername(),
      password: getPassword(),
      remember: remember.current?.getChecked()[0] ?? false
    }

    dispatch(login(data));
  }

  const loginClass = clsx("mscb-login-page flex-center h-full", classes.page);
  const titleClass = clsx(classes.title, "pb-2 text-upper text-primary");

  const AddonPassword = useMemo(() => {
    return <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        { showPassword ? <Visibility /> : <VisibilityOff /> }
      </IconButton>
    </InputAdornment>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ showPassword ]);

  return (
    <div className={loginClass}>
      <Grid container className="h-full">
        <Grid item lg={8} md={8} sm={6} xs={false}></Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <div className="px-20 bg-white h-full relative flex-column flex-center">
            <div className="w-full">
              <Typography component="h1" variant="h4">
                <span className={titleClass}>{ t('Pages.Login.Title') }</span>
              </Typography>
              <Box component="p" className="text-primary mt-6">
                { t('Pages.Login.Description', { app_name: t('App.Name') }) }
              </Box>
              <Box component="div" className="mt-8">

                <Input
                  ref={ username }
                  label={ labelUsername }
                  placeholder={ labelEnter }
                  message={ msgUsername.message ? t(msgUsername.message, msgUsername.params) : '' }
                />
                
                <Input
                  ref={ password }
                  type={ showPassword ? 'text' : 'password' }
                  label={ labelPassword }
                  placeholder={ labelEnter }
                  suffix={ AddonPassword }
                  message={ msgPassword.message ? t(msgPassword.message, msgPassword.params) : '' }
                />
                
                <div className="flex justify-between items-center mb-3">
                  <Checkbox ref={ remember } className="text-primary">
                    { labelRemember }
                  </Checkbox>
                  <Link to="" className="text-primary">
                    <em>{ t('Pages.Login.Forgot') }</em>
                  </Link>
                </div>

                <div className="flex flex-wrap items-center mb-4">
                  <div className="relative w-full">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                      style={{ height: '48px' }}
                      onClick={ handleClickLogin }
                    >
                      { isFetching ? <Loading /> : t('Pages.Login.Button') }
                    </Button>
                    
                  </div>
                </div>
                
              </Box>

              <div className="flex-center">
                <Language />
              </div>

            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;