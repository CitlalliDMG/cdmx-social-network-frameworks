import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
} from 'react-router-dom';
// import './App.css';

import Navigation from './global/Navigation';
import LandingPage from './global/Landing';
import SignUpPage from './global/SignUp';
import SignInPage from './global/SignIn';
import PasswordForgetPage from './global/PasswordForget';
import HomePage from './global/Home';
import AccountPage from './global/Account';

import * as routes from '../constants/routes';
import { firebase } from '../firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser = {this.state.authUser} />
    
          <Route
            exact path = {routes.LANDING}
            component = {LandingPage}
          />
          <Route
            exact path = {routes.SIGN_UP}
            component = {SignUpPage}
          />
          <Route
            exact path = {routes.SIGN_IN}
            component = {SignInPage}
          />
          <Route
            exact path = {routes.PASSWORD_FORGET}
            component = {PasswordForgetPage}
          />
          <Route
            exact path = {routes.HOME}
            component = {HomePage}
          />
          <Route
            exact path = {routes.ACCOUNT}
            component = {AccountPage}
          />
        </div>
      </Router>

    )
  }
}

export default App;
