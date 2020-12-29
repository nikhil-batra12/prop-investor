import * as actionTypes from "./actionTypes";

export function fetchDetails() {
  return {
    type: actionTypes.GET_DETAILS,
    data: { test: "123" },
  };
}

export function initFetchDetails() {
  return {
    type: actionTypes.INITIALIZE_GET,
    data: { test: "123" },
  };
}
