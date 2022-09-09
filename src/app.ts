import express, { Express, NextFunction, Response, Request } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import { AppErrorHandeller } from "./middleware/error-handeller.middleware";

export const app: Express = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Root route */
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome gRPC service.");
});

/* Error handelling middleware registration */
app.use(AppErrorHandeller);
