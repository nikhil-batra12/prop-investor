import * as actionTypes from "./actionTypes";
import _ from "lodash";
import * as modelNames from "root/modelNames";

export const initialState = {
  showLoader: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_LOADER:
      return handleShowLoader(state, action);

    case actionTypes.HIDE_LOADER:
      return handleHideLoader(state, action);

    default:
      return state;
  }
};

function handleShowLoader(state, action) {
  return _.defaults(
    {
      showLoader: true
    },
    state
  );
}

function handleHideLoader(state, action) {
  return _.defaults(
    {
      showLoader: false
    },
    state
  );
}


export default { [modelNames.LOADER_MODEL]: reducer };
