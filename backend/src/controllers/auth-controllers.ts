import { Request, Response, NextFunction } from "express";
import HttpError from "../models/HttpError";
import jwt, { JwtPayload } from "jsonwebtoken";
import { DUMMY_USERS } from "../database/user-model";
import { User } from "./user-controllers";
import bcrypt from "bcrypt";

export type UserAuthData = {
  userId: number;
  name: string;
  email: string;
  role: "admin" | "user";
};

declare module "jsonwebtoken" {
  export interface JwtPayload {
    userAuthData: UserAuthData;
  }
}

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  const pk = process.env.JWT_PRIVATE_KEY;
  try {
    if (!token || !pk) {
      return next(new HttpError("Not authenticated.", 401));
    }
    const decodedToken = jwt.verify(token, pk) as JwtPayload;

    req.body.userAuthData = { ...decodedToken.user };
    return next();
  } catch (err) {
    return next(new HttpError("Not authenticated.", 401));
  }
};

export const signup = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  const created = new Date().toISOString();
  const role = "user";
  const userId = DUMMY_USERS.length + 1;
  const pk = process.env.JWT_PRIVATE_KEY;
  if (!pk) {
    return next(new HttpError("Not authenticated.", 401));
  }
  const hashedPassword = bcrypt.hashSync(password, 12);

  const newUser: User = {
    id: userId,
    name,
    email,
    password: hashedPassword,
    role,
    created,
  };

  const authUser: UserAuthData = {
    userId,
    name,
    email,
    role,
  };

  DUMMY_USERS.push(newUser);

  const token = jwt.sign({ userAuthData: { user: authUser } }, pk, {
    expiresIn: "1h",
  });

  return res.status(201).json({ token: token });
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const pk = process.env.JWT_PRIVATE_KEY;
  if (!pk) {
    return next(new HttpError("Not authenticated.", 401));
  }

  const foundUser = DUMMY_USERS.find((u) => u.email === email);
  if (!foundUser) {
    return next(new HttpError("Invalid credentials", 401));
  }

  const isValidPassword = bcrypt.compareSync(password, foundUser.password);
  if (!isValidPassword) {
    return next(new HttpError("Invalid credentials", 401));
  }

  const authUser: UserAuthData = {
    userId: foundUser.id!,
    name: foundUser.name,
    email: foundUser.email,
    role: foundUser.role,
  };

  const token = jwt.sign({ userAuthData: authUser }, pk, { expiresIn: "1h" });

  return res.status(200).json({ token: token });
};
