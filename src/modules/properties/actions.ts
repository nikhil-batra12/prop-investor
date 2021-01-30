import * as actionTypes from "./actionTypes";

export function fetchAllProperties() {
  return {
    type: actionTypes.GET_ALL_PROPERTIES,
  };
}

export function fetchAllPropertiesSuccess(data) {
  return {
    type: actionTypes.GET_ALL_PROPERTIES_SUCCESS,
    data,
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
