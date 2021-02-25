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
    case actionTypes.GET_POPULAR_HOUSES_SUCCESS:
      return handleGetPopularHousesSuccess(state, action);

    case actionTypes.GET_POPULAR_HOUSES_FAILURE:
      return handleGetPopularHousesFailure(state, action);

    case actionTypes.GET_POPULAR_HOUSES_PENDING:
      return handleGetPopularHousesPending(state);

    default:
      return state;
  }
};

function handleGetPopularHousesSuccess(state, action) {
  return _.defaults(
    { popularHouses: { status: asyncActions.SUCCESS, data: action.data.data } },
    state
  );
}

function handleGetPopularHousesFailure(state, action) {
  return _.defaults(
    { popularHouses: { status: asyncActions.FAILURE, data: action.data } },
    state
  );
}

function handleGetPopularHousesPending(state) {
  return _.defaults({ popularHouses: { status: asyncActions.PENDING } }, state);
}

export default { [modelNames.AUTORIZATION_MODEL]: reducer };
