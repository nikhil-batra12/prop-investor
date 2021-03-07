import * as actionTypes from "./actionTypes";

export function fetchPropertyDetails(propertyId) {
  return {
    type: actionTypes.GET_PROPERTY_DETAILS,
    propertyId,
  };
}

export function fetchPropertyDetailsSuccess(data) {
  return {
    type: actionTypes.GET_PROPERTY_DETAILS_SUCCESS,
    data,
  };
}

export function fetchPropertyDetailsFailure(data) {
  return {
    type: actionTypes.GET_PROPERTY_DETAILS_FAILURE,
    data,
  };
}

export function fetchPropertyDetailsPending() {
  return {
    type: actionTypes.GET_PROPERTY_DETAILS_PENDING,
  };
}

export function resetPropertyDetails() {
  return {
    type: actionTypes.RESET_PROPERTY_DETAILS,
  };
}
