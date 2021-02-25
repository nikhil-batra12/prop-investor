import * as modelNames from "root/modelNames";
import _ from "lodash";
import * as reducer from "./reducer";
import * as constants from "./constants";

const getState = (state) =>
  _.get(state, [modelNames.AUTORIZATION_MODEL], reducer.initialState);

export const getPopularHouses = (state) =>
  _.get(getState(state), "popularHouses", constants.EMPTY_OBJECT);
