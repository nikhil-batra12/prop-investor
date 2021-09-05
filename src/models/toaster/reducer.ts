import * as actionTypes from "./actionTypes";
import _ from "lodash";
import * as modelNames from "root/modelNames";
import * as asyncActions from 'utils/asyncActions';

export const initialState = {
  showToaster: false,
  status: asyncActions.NONE,
  message: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_TOASTER:
      return handleShowToaster(state, action);

    case actionTypes.HIDE_TOASTER:
      return handleHideToaster(state);

    default:
      return state;
  }
};

function handleShowToaster(state, action) {
  return _.defaults(
    {
      showToaster: true,
      status: action.status,
      message: action.message
    },
    state
  );
}

function handleHideToaster(state) {
  return _.defaults(
    {
      showToaster: false,
      status: asyncActions.NONE,
      message: null
    },
    state
  );
}


export default { [modelNames.TOASTER_MODEL]: reducer };
