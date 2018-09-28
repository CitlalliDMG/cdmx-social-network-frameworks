import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import './App.css';

// import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import Page404 from './Page404';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

const App = () =>
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      {/* <Route
        exact path={routes.LANDING}
        component={LandingPage}
      /> */}
      <Route
        exact path={routes.SIGN_UP}
        component={SignUpPage}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={SignInPage}
      />
      <Route
        exact path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route
        exact path={routes.HOME}
        component={HomePage}
      />
      <Route
        exact path={routes.ACCOUNT}
        component={AccountPage}
      />
      <Route
        component={Page404}
      />
    </Switch>
  </Router>

export default withAuthentication(App);
