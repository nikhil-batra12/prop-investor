import * as moduleNames from "root/moduleNames";
import _ from "lodash";
import * as reducer from "./reducer";
import * as constants from "./constants";

const getState = (state) =>
  _.get(state, [moduleNames.PROPERTIES_MODULE], reducer.initialState);

export const getAllProperies = (state) =>
  _.get(getState(state), "allProperties", constants.EMPTY_OBJECT);
