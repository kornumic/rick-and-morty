import { Request, Response, NextFunction } from "express";
import HttpError from "../util/HttpError";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../database/user-model";
import { Role } from "../database/user-model";
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

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, email, password } = req.body;
  const pk = process.env.JWT_PRIVATE_KEY;
  if (!pk) {
    return next(new HttpError("Not authenticated.", 401));
  }

  try {
    const user = await UserModel.create({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 12),
      role: "user",
    });

    const token = jwt.sign({ userAuthData: user }, pk, {
      expiresIn: "1h",
    });

    return res
      .header("Authorization", "Bearer " + token)
      .status(201)
      .json({
        user,
      });
  } catch (err) {
    return next(new HttpError("Not authenticated.", 401));
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;

  const pk = process.env.JWT_PRIVATE_KEY;
  if (!pk) {
    return next(new HttpError("Not authenticated.", 401));
  }

  const foundUser = await UserModel.findOne({ where: { email: email } });
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
