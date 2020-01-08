import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
//Component/Page Imports
import dashboard from './pages/dashboard';
import Login from './pages/Login';
import register from './pages/register';
import AuthRoute from './util/AuthRoute';
//Redux imports
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser } from './redux/actions/userActions';
import { getDashboard } from './redux/actions/dashboardActions';

const token = localStorage.FBIdToken;
if (token) {
  const decodeToken = jwtDecode(token);
  if (decodeToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getDashboard());
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={dashboard} />
      <AuthRoute exact path="/login" component={Login} />
      <AuthRoute exact path="/register" component={register} />
    </Router>
  </Provider>
);

export default App;
