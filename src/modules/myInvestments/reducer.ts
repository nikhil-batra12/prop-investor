import * as actionTypes from "./actionTypes";
import _ from "lodash";
import * as moduleNames from "root/moduleNames";
import * as asyncActions from "utils/asyncActions";

export const initialState = {
  myInvestments: { status: asyncActions.NONE, data: {} },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MY_INVESTMENTS_SUCCESS:
      return handleGetMyInvestmentsSuccess(state, action);

    case actionTypes.GET_MY_INVESTMENTS_FAILURE:
      return handleGetMyInvestmentsFailure(state, action);

    case actionTypes.GET_MY_INVESTMENTS_PENDING:
      return handleGetMyInvestmentsPending(state);

    default:
      return state;
  }
};

function handleGetMyInvestmentsSuccess(state, action) {
  return _.defaults(
    {
      myInvestments: {
        status: asyncActions.SUCCESS,
        data: action.data.data,
      },
    },
    state
  );
}

function handleGetMyInvestmentsFailure(state, action) {
  return _.defaults(
    { myInvestments: { status: asyncActions.FAILURE, data: action.data } },
    state
  );
}

function handleGetMyInvestmentsPending(state) {
  return _.defaults(
    { myInvestments: { status: asyncActions.PENDING } },
    state
  );
}

export default { [moduleNames.MY_INVESTMENTS_MODULE]: reducer };
