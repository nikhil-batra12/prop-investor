import { takeLatest, put } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import * as loaderActions from "models/loader/actions";
import { getRequest } from "api/restService";
import * as constants from "./constants";

export function* fetchMyInvestments() {
  yield put(actions.fetchMyInvestmentsPending());
  yield put(loaderActions.showLoader());
  try {
    const response = yield getRequest({
      url: constants.MY_INVESTMENT_URL.endpoint
    });
    yield put(actions.fetchMyInvestmentsSuccess(response));
    yield put(loaderActions.hideLoader());
  } catch (e) {
    yield put(actions.fetchMyInvestmentsFailure(e));
    yield put(loaderActions.hideLoader());
  }
}

export const onGetDetails = takeLatest(
  actionTypes.GET_MY_INVESTMENTS,
  fetchMyInvestments
);

export default [onGetDetails];
