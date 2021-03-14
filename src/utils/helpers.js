import * as asyncActions from "./ayncActions";

export const isSuccess = (status) => status === asyncActions.SUCCESS;
export const isPending = (status) => status === asyncActions.PENDING;
export const isFailure = (status) => status === asyncActions.FAILURE;

export const setToken = (token) => localStorage.setItem("user-token", token);
export const getToken = () => localStorage.getItem("user-token");
export const clearToken = () => localStorage.removeItem("user-token");
