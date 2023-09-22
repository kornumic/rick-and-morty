import { NextFunction, Request, Response } from "express";
import { DUMMY_LOCATIONS } from "./dummies";

import { Location } from "../routes/location-routes";
import HttpError from "../models/HttpError";

export const getLocationById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(req.params.locationId);
  const location = DUMMY_LOCATIONS.find((c) => c.id === +req.params.locationId);
  console.log(location);
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

  const locations = DUMMY_LOCATIONS.slice(offset, offset + locationsPerPage);

  res.json({
    info: {
      count: DUMMY_LOCATIONS.length,
      pages: Math.ceil(DUMMY_LOCATIONS.length / locationsPerPage),
      next:
        page + 1 <= Math.ceil(DUMMY_LOCATIONS.length / locationsPerPage)
          ? page + 1
          : undefined,
      prev: page - 1 > 0 ? page - 1 : undefined,
    },
    results: locations,
  });
  res.status(200);
};

export const createLocation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const location = req.body as Location;
  location.id = DUMMY_LOCATIONS.length + 1;
  DUMMY_LOCATIONS.push(location);

  res.json({ location });
};

export const updateLocation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.json({ message: "updateLocation" });
};

export const deleteLocation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.json({ message: "deleteLocation" });
};
