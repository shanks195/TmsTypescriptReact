import { FC, useEffect, Suspense } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import i18n from './i18n';
import theme from './theme';
import Loading from 'views/components/base/Loading';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalCss from 'views/includes/GlobalCss';
import AuthContext from 'views/includes/AuthContext';
import Guard from 'views/includes/Guard';
import PAGE_URL from './PageURL';
import AuthRoutes from './navigations/auth';
import { Provider } from 'react-redux';
import store from './store';

const App: FC = () => {

  const { t } = useTranslation();
  // const location = useLocation()
  // const isAuth = useSelector(getIsAuth);

  useEffect(() => {
    document.title = t('App.Name');
  });

  return (
    <Provider store={ store }>
      <I18nextProvider i18n={ i18n }>
        <ThemeProvider theme={ theme }>
          <Suspense fallback={ <Loading /> }>

            <CssBaseline />
            <StyledEngineProvider injectFirst>
              <GlobalCss />
            </StyledEngineProvider>
            <BrowserRouter basename={ PAGE_URL.BASE }>
                <AuthContext>
                  <Routes>
                      <Route path="/*" element={ <Guard /> } />
                      {AuthRoutes.map((route, i) => {
                        const { component: AuthComponent, path = '/' } = route;
                        return <Route key={ i } path={ path } element={ AuthComponent ? <AuthComponent />: null } />
                      })}
                  </Routes>
                </AuthContext>
            </BrowserRouter>
          </Suspense>
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
    
  )

}

export default App;
