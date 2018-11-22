import {doFetch} from './fetch';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ERROR = 'ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';
export const GUEST_TOKEN = 'GUEST_TOKEN';

function login(user) {
  return {
    type: LOGIN,
    payload: user
  }
}

function logout() {
  return {
    type: LOGOUT
  }
}

function guestToken(t) {
  return {
    type: GUEST_TOKEN,
    payload: t
  }
}

function error(e) {
  return {
    type: ERROR,
    payload: e
  }
}

export function hideError() {
  return {
    type: HIDE_ERROR,
  }
}

export function getGuestToken(){
  return function (dispatch) {
    return doFetch('GET', `/login/guest`, null, null, function(err, res){
      if(err || res.success === false){ 
        var e = res.message;
        return dispatch(error(e))
      };
      return dispatch(guestToken(res.data.token));
    })
  }
}

export function authenticate(email, password, token) {
  return function (dispatch) {
    return doFetch('POST', `/login/user_login`, {
      email: email,
      password: password
    }, token, function(err, res){
      if(err || res.success === false){ 
        var e = res.message || err;
        return dispatch(error(e))
      };
      return dispatch(login(res.data));
    })
  }
}

export function destroySession() {
  return function (dispatch) {
    return dispatch(logout());
  }
}
