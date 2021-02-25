import * as actionTypes from "./actionTypes";

export function login(data) {
  return {
    type: actionTypes.LOGIN,
    data,
  };
}

export function loginSuccess(data) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data,
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
