import * as moduleNames from "root/moduleNames";
import _ from "lodash";
import * as reducer from "./reducer";
import * as constants from "./constants";

const getState = (state) =>
  _.get(state, [moduleNames.MY_INVESTMENTS_MODULE], reducer.initialState);

export const getMyInvestments = (state) =>
  _.get(getState(state), "myInvestments", constants.EMPTY_OBJECT);
