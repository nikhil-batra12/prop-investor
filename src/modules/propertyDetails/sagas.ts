import { takeLatest, put } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import * as loaderActions from "models/loader/actions";
import { getRequest } from "api/restService";
import * as constants from "./constants";

export function* fetchPropertyDetails(data) {
  yield put(actions.fetchPropertyDetailsPending());
  yield put(loaderActions.showLoader());
  try {
    const response = yield getRequest({
      url: constants.PROPERTY_DETAILS_URL.endpoint,
      interpolateParams: { propertyId: data.propertyId },
    });
    yield put(actions.fetchPropertyDetailsSuccess(response?.data));
    yield put(loaderActions.hideLoader());
  } catch (e) {
    yield put(actions.fetchPropertyDetailsFailure(e));
    yield put(loaderActions.hideLoader());
  }
}

export const onGetDetails = takeLatest(
  actionTypes.GET_PROPERTY_DETAILS,
  fetchPropertyDetails
);

export default [onGetDetails];
