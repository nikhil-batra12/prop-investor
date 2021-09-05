import * as actionTypes from "./actionTypes";

export function showToaster(status, message) {
  return {
    type: actionTypes.SHOW_TOASTER,
    status,
    message
  };
}

export function hideToaster() {
  return {
    type: actionTypes.HIDE_TOASTER,
  };
}
