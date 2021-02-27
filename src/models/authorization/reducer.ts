import * as actionTypes from "./actionTypes";
import _ from "lodash";
import * as modelNames from "root/modelNames";
import * as asyncActions from "utils/ayncActions";

export const initialState = {
  login: { status: asyncActions.NONE },
  signup: { status: asyncActions.NONE },
  userDetails: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return handleLoginSuccess(state, action);

    case actionTypes.LOGIN_FAILURE:
      return handleLoginFailure(state, action);

    case actionTypes.LOGIN_PENDING:
      return handleLoginPending(state);

    case actionTypes.SIGNUP_SUCCESS:
      return handleSignUpSuccess(state, action);

    case actionTypes.SIGNUP_FAILURE:
      return handleSignUpFailure(state, action);

    case actionTypes.SIGNUP_PENDING:
      return handleSignUpPending(state);

    default:
      return state;
  }
};

function handleLoginSuccess(state, action) {
  return _.defaults(
    {
      login: { status: asyncActions.SUCCESS },
      userDetails: action.data.data,
    },
    state
  );
}

function handleLoginFailure(state, action) {
  return _.defaults(
    {
      login: { status: asyncActions.FAILURE, message: action.data },
      userDetails: {},
    },
    state
  );
}

function handleLoginPending(state) {
  return _.defaults(
    {
      login: { status: asyncActions.PENDING },
      userDetails: {},
    },
    state
  );
}
function handleSignUpSuccess(state, action) {
  return _.defaults(
    {
      signup: { status: asyncActions.SUCCESS },
      userDetails: action.data.data,
    },
    state
  );
}

function handleSignUpFailure(state, action) {
  return _.defaults(
    {
      signup: { status: asyncActions.FAILURE, message: action.data },
      userDetails: {},
    },
    state
  );
}

function handleSignUpPending(state) {
  return _.defaults(
    {
      signup: { status: asyncActions.PENDING },
      userDetails: {},
    },
    state
  );
}

export default { [modelNames.AUTORIZATION_MODEL]: reducer };
