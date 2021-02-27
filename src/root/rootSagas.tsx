import { all } from "redux-saga/effects";
import homeSagas from "modules/home/sagas";
import propertiesSagas from "modules/properties/sagas";
import authSagas from "models/authorization/sagas";
import _ from "lodash";

const rootSagas = [...homeSagas, ...propertiesSagas, ...authSagas];

export default function* rootSaga() {
  yield all([...rootSagas]);
}
