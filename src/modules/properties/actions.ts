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

export function registerProperty(data) {
  return {
    type: actionTypes.REGISTER_PROPERTY,
    data,
  };
}

export function registerPropertySuccess(response) {
  return {
    type: actionTypes.REGISTER_PROPERTY_SUCCESS,
    response,
  };
}

export function registerPropertyFailure(data) {
  return {
    type: actionTypes.REGISTER_PROPERTY_FAILURE,
    data,
  };
}
export function registerPropertyPending() {
  return {
    type: actionTypes.REGISTER_PROPERTY_PENDING,
  };
}

