import * as actionTypes from "./actionTypes";

export function fetchAllProperties() {
  return {
    type: actionTypes.GET_ALL_PROPERTIES,
  };
}

export function fetchAllPropertiesSuccess(response) {
  return {
    type: actionTypes.GET_ALL_PROPERTIES_SUCCESS,
    response,
  };
}

export function fetchAllPropertiesFailure(data) {
  return {
    type: actionTypes.GET_ALL_PROPERTIES_FAILURE,
    data,
  };
}
export function fetchAllPropertiesPending() {
  return {
    type: actionTypes.GET_ALL_PROPERTIES_PENDING,
  };
}
