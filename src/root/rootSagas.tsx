import { all } from "redux-saga/effects";
import homeSagas from "modules/home/sagas";
import propertiesSagas from "modules/properties/sagas";
import propertyDetailsSagas from "modules/propertyDetails/sagas";
import myInvestmentsSagas from "modules/myInvestments/sagas";
import authSagas from "models/authorization/sagas";

const rootSagas = [
  ...homeSagas,
  ...propertiesSagas,
  ...authSagas,
  ...propertyDetailsSagas,
  ...myInvestmentsSagas,
];

export default function* rootSaga() {
  yield all([...rootSagas]);
}
