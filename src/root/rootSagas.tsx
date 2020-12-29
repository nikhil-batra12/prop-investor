import { all } from "redux-saga/effects";
import homeSagas from "modules/home/sagas";
import _ from "lodash";

const rootSagas = [...homeSagas];

export default function* rootSaga() {
  yield all([...rootSagas]);
}
