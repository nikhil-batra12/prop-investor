import * as asyncActions from "./asyncActions";

export const isSuccess = (status) => status === asyncActions.SUCCESS;
export const isPending = (status) => status === asyncActions.PENDING;
export const isFailure = (status) => status === asyncActions.FAILURE;
export const isWarning = (status) => status === asyncActions.WARNING;

export const setToken = (token) => {
  if (token) {
    localStorage.setItem("user-token", token);
  }
};
export const getToken = () => localStorage.getItem("user-token");
export const clearToken = () => localStorage.removeItem("user-token");
