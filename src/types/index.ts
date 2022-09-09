declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        name: string;
        role: string;
      };
    }
  }
}

type ErrorType = {
  field: string;
  message: string;
};

export interface IHttpErrorResponse {
  status: boolean;
  errors: ErrorType[];
}

export interface IHttpSuccessResponse {
  status: boolean;
  message: string;
  token?: string;
  data?: any;
}
