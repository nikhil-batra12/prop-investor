import * as modelNames from "root/modelNames";
import _ from "lodash";
import * as reducer from "./reducer";
import * as constants from "./constants";

const getState = (state) =>
  _.get(state, [modelNames.LOADER_MODEL], reducer.initialState);

export const getToasterState = (state) =>
  _.get(getState(state), "showToaster", false);

export const getToasterStatus = (state) =>
  _.get(getState(state), "status", constants.EMPTY_OBJECT);

export const getToasterMessage = (state) =>
  _.get(getState(state), "message", null);
