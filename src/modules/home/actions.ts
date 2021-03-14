import * as actionTypes from "./actionTypes";

export function fetchPopularHouses() {
  return {
    type: actionTypes.GET_POPULAR_HOUSES,
  };
}

export function fetchPopularHousesSuccess(response) {
  return {
    type: actionTypes.GET_POPULAR_HOUSES_SUCCESS,
    response,
  };
}

export function fetchPopularHousesFailure(data) {
  return {
    type: actionTypes.GET_POPULAR_HOUSES_FAILURE,
    data,
  };
}
export function fetchPopularHousesPending() {
  return {
    type: actionTypes.GET_POPULAR_HOUSES_PENDING,
  };
}
