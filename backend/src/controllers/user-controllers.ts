import { Request, Response, NextFunction } from "express";
import { DUMMY_USERS } from "../database/user-model";

export type User = {
  id: number | undefined;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  created: string;
};

export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // only for purpose of local testing, never do this in production
  res.json(DUMMY_USERS);
};
