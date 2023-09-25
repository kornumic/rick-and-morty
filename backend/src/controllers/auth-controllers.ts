import { Request, Response, NextFunction } from "express";
import HttpError from "../util/HttpError";
import jwt, { JwtPayload } from "jsonwebtoken";
import { DUMMY_USERS } from "../database/user-model";
import { Role, User } from "./user-controllers";
import bcrypt from "bcrypt";

export type UserAuthData = {
  userId: number;
  name: string;
  email: string;
  role: Role;
};

declare module "jsonwebtoken" {
  export interface JwtPayload {
    userAuthData: UserAuthData;
  }
}

/**
 * Check if user is authenticated by checking for a valid JWT token in the Authorization header.
 * @param req
 * @param res
 * @param next
 */
export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  const pk = process.env.JWT_PRIVATE_KEY;
  try {
    if (!token || !pk) {
      return next(new HttpError("Not authenticated.", 401));
    }
    const decodedToken = jwt.verify(token, pk) as JwtPayload;
    if (!decodedToken.userAuthData) {
      return next(new HttpError("Not authenticated.", 401));
    }
    req.body.userAuthData = { ...decodedToken.userAuthData };
    return next();
  } catch (err) {
    return next(new HttpError("Not authenticated.", 401));
  }
};

/**
 * Check if user is authorized to access the resource based on the role provided in the authorization array.
 * Encapsulated in a closure to allow for passing of the authorization array.
 * @param authorization
 */
export const requireAuthorization = (authorization: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (
      !req.body.userAuthData ||
      !authorization.includes(req.body.userAuthData.role)
    ) {
      return next(new HttpError("Not authorized.", 403));
    }
    return next();
  };
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

  const token = jwt.sign({ userAuthData: authUser }, pk, {
    expiresIn: "1h",
  });

  return res
    .header("Authorization", "Bearer " + token)
    .status(201)
    .json({
      userId: userId,
      role: role,
    });
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

  return res
    .header("Authorization", "Bearer " + token)
    .status(200)
    .json({
      userId: foundUser.id!,
      role: foundUser.role,
    });
};
