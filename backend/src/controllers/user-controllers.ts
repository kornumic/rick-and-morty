import { Request, Response, NextFunction } from "express";
import { UserModel } from "../database/user-model";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // only for purpose of local testing, never do this in production
  const users = await UserModel.findAll();

  res.json(users);
};
