import * as actionTypes from "./actionTypes";
import _ from "lodash";
import * as modelNames from "root/modelNames";
import * as asyncActions from "utils/ayncActions";
import * as helpers from "utils/helpers";

export const initialState = {
  login: { status: asyncActions.NONE },
  signup: { status: asyncActions.NONE },
  logout: { status: asyncActions.NONE },
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

    case actionTypes.LOGOUT_SUCCESS:
      return handleLogoutSuccess(state, action);

    case actionTypes.LOGOUT_FAILURE:
      return handleLogoutFailure(state, action);

    case actionTypes.LOGOUT_PENDING:
      return handleLogoutPending(state);

    default:
      return state;
  }
};

function handleLoginSuccess(state, action) {
  helpers.setToken(action?.response?.user?.token);
  return _.defaults(
    {
      login: { status: asyncActions.SUCCESS },
      userDetails: action.response.user,
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
      userDetails: action.data.data.user,
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
function handleLogoutSuccess(state, action) {
  helpers.clearToken();
  return initialState;
}

function handleLogoutFailure(state, action) {
  helpers.clearToken();
  return initialState;
}

function handleLogoutPending(state) {
  return _.defaults(
    {
      logout: { status: asyncActions.PENDING },
      userDetails: {},
    },
    state
  );
}

export default { [modelNames.AUTORIZATION_MODEL]: reducer };
