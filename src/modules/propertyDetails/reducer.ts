import * as actionTypes from "./actionTypes";
import _ from "lodash";
import * as moduleNames from "root/moduleNames";
import * as asyncActions from "utils/asyncActions";

export const initialState = {
  propertyDetails: { status: asyncActions.NONE, data: {} },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROPERTY_DETAILS_SUCCESS:
      return handleGetPropertyDetailsSuccess(state, action);

    case actionTypes.GET_PROPERTY_DETAILS_FAILURE:
      return handleGetPropertyDetailsFailure(state, action);

    case actionTypes.GET_PROPERTY_DETAILS_PENDING:
      return handleGetPropertyDetailsPending(state);

    case actionTypes.RESET_PROPERTY_DETAILS:
      return handleResetPropertyDetails(state);

    default:
      return state;
  }
};

function handleGetPropertyDetailsSuccess(state, action) {
  return _.defaults(
    {
      propertyDetails: {
        status: asyncActions.SUCCESS,
        data: action.data[0],
      },
    },
    state
  );
}

function handleGetPropertyDetailsFailure(state, action) {
  return _.defaults(
    { propertyDetails: { status: asyncActions.FAILURE, data: action.data } },
    state
  );
}

function handleGetPropertyDetailsPending(state) {
  return _.defaults(
    { propertyDetails: { status: asyncActions.PENDING } },
    state
  );
}

function handleResetPropertyDetails(state) {
  return _.defaults(
    { propertyDetails: { status: asyncActions.NONE, data: {} } },
    state
  );
}

export default { [moduleNames.PROPERTY_DETAILS_MODULE]: reducer };
