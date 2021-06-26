import * as actionTypes from "./actionTypes";
import _ from "lodash";
import * as moduleNames from "root/moduleNames";
import * as asyncActions from "utils/asyncActions";

export const initialState = {
  popularHouses: { status: asyncActions.NONE, data: [] },
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
    {
      popularHouses: {
        status: asyncActions.SUCCESS,
        data: action.response,
      },
    },
    state
  );
}

function handleGetPopularHousesFailure(state, action) {
  return _.defaults(
    { popularHouses: { status: asyncActions.FAILURE, data: action.response } },
    state
  );
}

function handleGetPopularHousesPending(state) {
  return _.defaults({ popularHouses: { status: asyncActions.PENDING } }, state);
}

export default { [moduleNames.HOME_MODULE]: reducer };
