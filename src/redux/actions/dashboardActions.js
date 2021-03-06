import { SET_DASHBOARD, LOADING_DASHBOARD, CLEAR_ERRORS, SET_ERRORS, UNSET_FIRST_LOGIN } from '../types';
import axios from 'axios';

export const getDashboard = () => dispatch => {
  dispatch({ type: LOADING_DASHBOARD });
  axios
    .get('/dashboard/')
    .then(res => {
      dispatch({
        type: SET_DASHBOARD,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const saveDashboard = data => dispatch => {
  dispatch({ type: LOADING_DASHBOARD });
  axios
    .post('/dashboard/', data)
    .then(() => {
      dispatch({ type: UNSET_FIRST_LOGIN });
      localStorage.removeItem('firstLogin');
      dispatch(getDashboard());
      dispatch(clearErrors());
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
