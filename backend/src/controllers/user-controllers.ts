import { Request, Response, NextFunction } from "express";
import { DUMMY_USERS } from "../database/user-model";

export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // only for purpose of local testing, never do this in production
  res.json(DUMMY_USERS);
};
