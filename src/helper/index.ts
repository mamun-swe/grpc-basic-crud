import { IHttpErrorResponse, IHttpSuccessResponse } from "../types";

/* Http error response */
export const HttpErrorResponse = async (
  payload: IHttpErrorResponse
): Promise<IHttpErrorResponse> => {
  return {
    status: payload.status,
    errors: [...payload.errors],
  };
};

/* Http success response */
export const HttpSuccessResponse = async (
  payload: IHttpSuccessResponse
): Promise<IHttpSuccessResponse> => {
  return {
    status: payload.status,
    message: payload.message,
  };
};
