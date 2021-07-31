import { takeLatest, put } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import * as loaderActions from 'models/loader/actions';
import { getRequest, postRequest } from "api/restService";
import * as constants from "./constants";

export function* fetchAllProperties() {
  yield put(actions.fetchAllPropertiesPending());
  yield put(loaderActions.showLoader());
  try {
    const response = yield getRequest({
      url: constants.ALL_PROPERTIES_URL.endpoint,
    });
    yield put(actions.fetchAllPropertiesSuccess(response.data));
    yield put(loaderActions.hideLoader());
  } catch (e) {
    yield put(actions.fetchAllPropertiesFailure(e));
    yield put(loaderActions.hideLoader());
  }
}

export function* initiateRegisterProperty(action) {
  yield put(actions.registerPropertyPending());
  try {
    const response = yield postRequest({
      url: constants.REGISTER_PROPERTY_URL.endpoint,
      body: action.data,
    });
    yield put(actions.registerPropertySuccess(response.data));
  } catch (e) {
    yield put(actions.registerPropertyFailure(e));
  }
}

export const onGetDetails = takeLatest(
  actionTypes.GET_ALL_PROPERTIES,
  fetchAllProperties
);

export const onRegisterProperty = takeLatest(
  actionTypes.REGISTER_PROPERTY,
  initiateRegisterProperty
);

export default [onGetDetails, onRegisterProperty];
