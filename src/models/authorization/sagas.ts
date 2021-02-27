import { takeLatest, put } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { postRequest } from "api/restService";
import * as constants from "./constants";

export function* initiateLogin(action) {
  console.log(action.data);
  yield put(actions.loginPending());
  try {
    const response = yield postRequest({
      url: constants.LOGIN.endpoint,
      body: action.data,
    });
    yield put(actions.loginSuccess(response));
  } catch (e) {
    yield put(actions.loginFailure(e));
  }
}

export function* initiateSignUp(action) {
  console.log(action.data);
  yield put(actions.signupPending());
  try {
    const response = yield postRequest({
      url: constants.LOGIN.endpoint,
      body: action.data,
    });
    yield put(actions.signupSuccess(response));
  } catch (e) {
    yield put(actions.signupSuccess(e));
  }
}

export const onLogin = takeLatest(actionTypes.LOGIN, initiateLogin);

export const onSignUp = takeLatest(actionTypes.SIGNUP, initiateSignUp);

export default [onLogin, onSignUp];
