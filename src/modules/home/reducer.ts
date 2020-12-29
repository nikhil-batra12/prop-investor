import * as actionTypes from "./actionTypes";
import _ from "lodash";
import * as moduleNames from "root/moduleNames";

export const initialState = {
  homeDetails: "124",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAILS:
      return handleGet(state, action);

    default:
      return state;
  }
};

function handleGet(state, action) {
  return _.defaults({ homeDetails: "Test" }, state);
}

export default { [moduleNames.HOME_MODULE]: reducer };
