import * as modelNames from "root/modelNames";
import _ from "lodash";
import * as reducer from "./reducer";
import * as constants from "./constants";

const getState = (state) =>
  _.get(state, [modelNames.AUTORIZATION_MODEL], reducer.initialState);

export const getLoginStatus = (state) =>
  _.get(getState(state), "login", constants.EMPTY_OBJECT);

export const getSignupStatus = (state) =>
  _.get(getState(state), "signup", constants.EMPTY_OBJECT);

export const getUserDeails = (state) =>
  _.get(getState(state), "userDetails", constants.EMPTY_OBJECT);
