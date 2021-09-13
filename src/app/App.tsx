import { FC, useEffect, Suspense } from 'react';
import history from './history';
import store from './store';
import i18n from './i18n';
import theme from './theme';
import Loading from 'views/components/base/Loading';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalCss from 'views/includes/GlobalCss';
import AuthContext from 'views/includes/AuthContext';
import Guard from 'views/includes/Guard';
import PAGE_URL from './PageURL';
import AuthRoutes from './navigations/auth';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

const App: FC = () => {

  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('App.Name');
  });

  return (
    <Provider store={ store }>
      <I18nextProvider i18n={ i18n }>
        <ThemeProvider theme={ theme }>
          <Suspense fallback={ <Loading /> }>

            <CssBaseline />
            <GlobalCss />

            <BrowserRouter basename={ PAGE_URL.BASE }>
              <Router history={ history }>
                <AuthContext>
                  <Switch>
                    {AuthRoutes.map((route, i) => (
                      <Route
                        key={i}
                        exact={ route.exact }
                        path={route.path}
                        component={route.component}
                      />
                    ))}
                    <Route path="/">
                      <Guard />
                    </Route>
                  </Switch>
                </AuthContext>
              </Router>
            </BrowserRouter>

          </Suspense>
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  )

}

export default App;
