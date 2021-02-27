import * as asyncActions from "./ayncActions";

export const isSuccess = (status) => status === asyncActions.SUCCESS;
export const isPending = (status) => status === asyncActions.PENDING;
export const isFailure = (status) => status === asyncActions.FAILURE;
