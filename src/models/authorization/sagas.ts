import { takeLatest, put } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { postRequest, getRequest } from "api/restService";
import * as constants from "./constants";

export function* initiateLogin(action) {
  console.log(action.data);
  yield put(actions.loginPending());
  try {
    const response = yield postRequest({
      url: constants.LOGIN.endpoint,
      body: action.data,
    });
    yield put(actions.loginSuccess(response.data));
  } catch (e) {
    yield put(actions.loginFailure(e));
  }
}

export function* initiateSignUp(action) {
  console.log(action.data);
  yield put(actions.signupPending());
  try {
    const response = yield postRequest({
      url: constants.SIGNUP.endpoint,
      body: action.data,
    });
    yield put(actions.signupSuccess(response));
  } catch (e) {
    yield put(actions.signupSuccess(e));
  }
}

export function* initiateLogout() {
  yield put(actions.logoutPending());
  try {
    const response = yield postRequest({
      url: constants.LOGOUT.endpoint,
    });
    if (response.status === 200) {
      yield put(actions.logoutSuccess());
    } else {
      yield put(actions.logoutFailure());
    }
  } catch (e) {
    yield put(actions.logoutFailure());
  }
}

export function* initiateFetchUser() {
  yield put(actions.fetchUserPending());
  try {
    const response = yield getRequest({
      url: constants.FETCH_USER.endpoint,
    });
    if (response.status === 200) {
      yield put(actions.fetchUserSuccess(response.data));
    } else {
      yield put(actions.fetchUserFailure(response.data));
    }
  } catch (e) {
    yield put(actions.fetchUserFailure({ data: "Something went wrong" }));
  }
}

export const onLogin = takeLatest(actionTypes.LOGIN, initiateLogin);

export const onSignUp = takeLatest(actionTypes.SIGNUP, initiateSignUp);

export const onLogout = takeLatest(actionTypes.LOGOUT, initiateLogout);

export const onFetchUser = takeLatest(
  actionTypes.FETCH_USER,
  initiateFetchUser
);

export default [onLogin, onSignUp, onLogout, onFetchUser];
