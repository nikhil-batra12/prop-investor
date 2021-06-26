import * as actionTypes from "./actionTypes";

export function fetchMyInvestments() {
  return {
    type: actionTypes.GET_MY_INVESTMENTS,
  };
}

export function fetchMyInvestmentsSuccess(data) {
  return {
    type: actionTypes.GET_MY_INVESTMENTS_SUCCESS,
    data,
  };
}

export function fetchMyInvestmentsFailure(data) {
  return {
    type: actionTypes.GET_MY_INVESTMENTS_FAILURE,
    data,
  };
}

export function fetchMyInvestmentsPending() {
  return {
    type: actionTypes.GET_MY_INVESTMENTS_PENDING,
  };
}


