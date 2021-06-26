import { takeLatest, put } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { getRequest } from "api/restService";
import * as constants from "./constants";

export function* fetchPropertyDetails(data) {
  yield put(actions.fetchPropertyDetailsPending());
  try {
    const response = yield getRequest({
      url: constants.PROPERTY_DETAILS_URL.endpoint,
      interpolateParams: { propertyId: data.propertyId },
    });
    yield put(actions.fetchPropertyDetailsSuccess(response?.data));
  } catch (e) {
    yield put(actions.fetchPropertyDetailsFailure(e));
  }
}

export const onGetDetails = takeLatest(
  actionTypes.GET_PROPERTY_DETAILS,
  fetchPropertyDetails
);

export default [onGetDetails];
