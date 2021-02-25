import * as actionTypes from "./actionTypes";
import _ from "lodash";
import * as moduleNames from "root/moduleNames";
import * as asyncActions from "utils/ayncActions";

export const initialState = {
  allProperties: { status: asyncActions.NONE, data: [] },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PROPERTIES_SUCCESS:
      return handleGetAllPropertiesSuccess(state, action);

    case actionTypes.GET_ALL_PROPERTIES_FAILURE:
      return handleGetAllPropertiesFailure(state, action);

    case actionTypes.GET_ALL_PROPERTIES_PENDING:
      return handleGetAllPropertiesPending(state);

    default:
      return state;
  }
};

function handleGetAllPropertiesSuccess(state, action) {
  return _.defaults(
    { allProperties: { status: asyncActions.SUCCESS, data: action.data.data } },
    state
  );
}

function handleGetAllPropertiesFailure(state, action) {
  return _.defaults(
    { allProperties: { status: asyncActions.FAILURE, data: action.data } },
    state
  );
}

function handleGetAllPropertiesPending(state) {
  return _.defaults({ allProperties: { status: asyncActions.PENDING } }, state);
}

export default { [moduleNames.PROPERTIES_MODULE]: reducer };
