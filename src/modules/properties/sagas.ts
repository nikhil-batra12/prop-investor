import { takeLatest, put } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { getRequest } from "api/restService";
import * as constants from "./constants";

export function* fetchAllProperties() {
  yield put(actions.fetchAllPropertiesPending());
  try {
    const response = yield getRequest({
      url: constants.ALL_PROPERTIES_URL.endpoint,
    });
    yield put(actions.fetchAllPropertiesSuccess(response.data));
  } catch (e) {
    yield put(actions.fetchAllPropertiesFailure(e));
  }
}

export const onGetDetails = takeLatest(
  actionTypes.GET_ALL_PROPERTIES,
  fetchAllProperties
);

export default [onGetDetails];
