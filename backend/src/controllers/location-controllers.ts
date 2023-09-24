import { NextFunction, Request, Response } from "express";
import { DUMMY_LOCATIONS, removeLocation } from "./dummies";

import HttpError from "../models/HttpError";

export type Location = {
  id: number | undefined;
  name: string;
  type: string;
  dimension: string;
  residents: number[];
  created: string;
};

export const getLocationById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const location = DUMMY_LOCATIONS.find((c) => c.id === +req.params.locationId);

  if (!location) {
    return next(new HttpError("Location not found", 404));
  }
  res.json(location);
};

export const getAllLocations = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const page = +(req.query.page || "1");
  const locationsPerPage = +(req.query.perPage || "20");
  const offset = (page - 1) * locationsPerPage;

  // calculate info values
  const count = DUMMY_LOCATIONS.length;
  const pages = Math.ceil(count / locationsPerPage);
  const nextPage = page + 1 <= pages ? page + 1 : undefined;
  const prevPage = page - 1 > 0 ? page - 1 : undefined;

  if (page > pages || page < 1)
    return next(new HttpError("Page not found", 404));

  const locations = DUMMY_LOCATIONS.slice(offset, offset + locationsPerPage);

  return res
    .json({
      info: {
        count: count,
        pages: pages,
        next: nextPage,
        prev: prevPage,
      },
      results: locations,
    })
    .status(200);
};

export const createLocation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const location = req.body as Location;
  if (location.id) {
    return next(new HttpError("Invalid input", 422));
  }
  location.id = DUMMY_LOCATIONS.length + 1;
  DUMMY_LOCATIONS.push(location);

  return res.json({ location });
};

export const updateLocation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const patchData = req.body as Partial<Location>;
  const foundLocation = DUMMY_LOCATIONS.find(
    (c) => c.id === +req.params.locationId,
  );
  if (!foundLocation) {
    return next(new HttpError("Location not found", 404));
  }
  if (patchData.id) {
    return next(new HttpError("Invalid input", 422));
  }
  Object.assign(foundLocation, patchData);
  return res.json(foundLocation).status(200);
};

export const deleteLocation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    removeLocation(+req.params.locationId);
  } catch (err) {
    return next(err);
  }
  return res.status(200).json({ message: "Location deleted" });
};
