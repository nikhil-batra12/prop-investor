import { takeLatest, put } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { getRequest } from "api/restService";
import * as constants from "./constants";

export function* fetchMyInvestments() {
  yield put(actions.fetchMyInvestmentsPending());
  try {
    const response = yield getRequest({
      url: constants.MY_INVESTMENT_URL.endpoint
    });
    yield put(actions.fetchMyInvestmentsSuccess(response));
  } catch (e) {
    yield put(actions.fetchMyInvestmentsFailure(e));
  }
}

export const onGetDetails = takeLatest(
  actionTypes.GET_MY_INVESTMENTS,
  fetchMyInvestments
);

export default [onGetDetails];
