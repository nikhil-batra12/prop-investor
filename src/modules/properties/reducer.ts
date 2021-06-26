import * as actionTypes from "./actionTypes";
import _ from "lodash";
import * as moduleNames from "root/moduleNames";
import * as asyncActions from "utils/asyncActions";

export const initialState = {
  allProperties: { status: asyncActions.NONE, data: [] },
  registerProperty: { status: asyncActions.NONE },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PROPERTIES_SUCCESS:
      return handleGetAllPropertiesSuccess(state, action);

    case actionTypes.GET_ALL_PROPERTIES_FAILURE:
      return handleGetAllPropertiesFailure(state, action);

    case actionTypes.GET_ALL_PROPERTIES_PENDING:
      return handleGetAllPropertiesPending(state);

      case actionTypes.REGISTER_PROPERTY_SUCCESS:
        return handleRegisterPropertySuccess(state, action);
  
      case actionTypes.REGISTER_PROPERTY_FAILURE:
        return handleRegisterPropertyFailure(state, action);
  
      case actionTypes.REGISTER_PROPERTY_PENDING:
        return handleRegisterPropertyPending(state);

    default:
      return state;
  }
};

function handleGetAllPropertiesSuccess(state, action) {
  return _.defaults(
    {
      allProperties: {
        status: asyncActions.SUCCESS,
        data: action.response.properties,
      },
    },
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

function handleRegisterPropertySuccess(state, action) {
  return _.defaults(
    {
      registerProperty: { status: asyncActions.SUCCESS },
    },
    state
  );
}

function handleRegisterPropertyFailure(state, action) {
  return _.defaults(
    {
      registerProperty: { status: asyncActions.FAILURE, message: action.data },
    },
    state
  );
}

function handleRegisterPropertyPending(state) {
  return _.defaults(
    {
      registerProperty: { status: asyncActions.PENDING },
    },
    state
  );
}

export default { [moduleNames.PROPERTIES_MODULE]: reducer };
