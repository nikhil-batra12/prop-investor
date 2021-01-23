import { takeLatest, put } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { getRequest } from "api/restService";
import * as constants from "./constants";

export function* fetchPopularHouses() {
  yield put(actions.fetchPopularHousesPending());
  try {
    const response = yield getRequest({
      url: constants.POPULAR_HOUSES_URL.endpoint,
    });
    yield put(actions.fetchPopularHousesSuccess(response));
  } catch (e) {
    yield put(actions.fetchPopularHousesFailure(e));
  }
}

export const onGetDetails = takeLatest(
  actionTypes.GET_POPULAR_HOUSES,
  fetchPopularHouses
);

export default [onGetDetails];
