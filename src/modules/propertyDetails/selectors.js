import * as moduleNames from "root/moduleNames";
import _ from "lodash";
import * as reducer from "./reducer";
import * as constants from "./constants";

const getState = (state) =>
  _.get(state, [moduleNames.PROPERTY_DETAILS_MODULE], reducer.initialState);

export const getPropertyDetails = (state) =>
  _.get(getState(state), "propertyDetails", constants.EMPTY_OBJECT);
