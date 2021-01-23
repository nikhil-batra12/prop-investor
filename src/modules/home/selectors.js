import * as moduleNames from "root/moduleNames";
import _ from "lodash";
import * as reducer from "./reducer";
import * as constants from "./constants";

const getState = (state) =>
  _.get(state, [moduleNames.HOME_MODULE], reducer.initialState);

export const getPopularHouses = (state) =>
  _.get(getState(state), "popularHouses", constants.EMPTY_OBJECT);
