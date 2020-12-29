import { takeLatest, put } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";

export function* helloSaga() {
  console.log("Hello Sagas!");
  yield put(actions.fetchDetails());
}

export const onGetDetails = takeLatest(actionTypes.INITIALIZE_GET, helloSaga);

export default [onGetDetails];
