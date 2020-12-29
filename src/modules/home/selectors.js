import * as moduleNames from "root/moduleNames";
import _ from "lodash";
import * as reducer from "./reducer";
import * as constants from "./constants";

const getState = (state) =>
  _.get(state, [moduleNames.HOME_MODULE], reducer.initialState);

export const getDetails = (state) =>
  _.get(getState(state), "homeDetails", constants.EMPTY_OBJECT);
