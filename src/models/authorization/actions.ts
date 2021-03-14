import * as actionTypes from "./actionTypes";

export function login(data) {
  return {
    type: actionTypes.LOGIN,
    data,
  };
}

export function loginSuccess(response) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    response,
  };
}

export function loginFailure(data) {
  return {
    type: actionTypes.LOGIN_FAILURE,
    data,
  };
}
export function loginPending() {
  return {
    type: actionTypes.LOGIN_PENDING,
  };
}
export function signup(data) {
  return {
    type: actionTypes.SIGNUP,
    data,
  };
}

export function signupSuccess(data) {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    data,
  };
}

export function signupFailure(data) {
  return {
    type: actionTypes.SIGNUP_FAILURE,
    data,
  };
}
export function signupPending() {
  return {
    type: actionTypes.SIGNUP_PENDING,
  };
}

export function logout() {
  return {
    type: actionTypes.LOGOUT,
  };
}

export function logoutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
}

export function logoutFailure() {
  return {
    type: actionTypes.LOGOUT_FAILURE,
  };
}
export function logoutPending() {
  return {
    type: actionTypes.LOGOUT_PENDING,
  };
}
