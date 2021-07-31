import * as modelNames from "root/modelNames";
import _ from "lodash";
import * as reducer from "./reducer";
import * as constants from "./constants";

const getState = (state) =>
  _.get(state, [modelNames.LOADER_MODEL], reducer.initialState);

export const getLoaderState = (state) =>
  _.get(getState(state), "showLoader", constants.EMPTY_OBJECT);
