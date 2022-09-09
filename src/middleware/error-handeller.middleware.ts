import { NextFunction, Request, Response } from "express";
import { HttpErrorResponse } from "../helper";

export const AppErrorHandeller = async (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.status === 404) {
    return res.status(404).json(
      await HttpErrorResponse({
        status: false,
        errors: [
          {
            field: "not-found",
            message: error.message,
          },
        ],
      })
    );
  }

  if (error.status === 400) {
    return res.status(400).json(
      await HttpErrorResponse({
        status: false,
        errors: [
          {
            field: "bad-request",
            message: "Bad request server denied.",
          },
        ],
      })
    );
  }

  if (error.status === 401) {
    return res.status(401).json(
      await HttpErrorResponse({
        status: false,
        errors: [
          {
            field: "permission",
            message: "You have no permission to access.",
          },
        ],
      })
    );
  }

  return res.status(500).json(
    await HttpErrorResponse({
      status: false,
      errors: [
        {
          field: "server-error",
          message: "Internal server error.",
        },
      ],
    })
  );
};
