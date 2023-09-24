import { Location } from "../controllers/location-controllers";
import HttpError from "../models/HttpError";

export let DUMMY_LOCATIONS: Location[] = [
  {
    id: 1,
    name: "Earth (C-137)",
    type: "Planet",
    dimension: "Dimension C-137",
    residents: [
      38, 45, 71, 82, 83, 92, 112, 114, 116, 117, 120, 127, 155, 169, 175, 179,
      186, 201, 216, 239, 271, 302, 303, 338, 343, 356, 394,
    ],
    created: "2017-11-10T12:42:04.162Z",
  },
];

export const removeLocation = (locationId: number) => {
  const foundLocation = DUMMY_LOCATIONS.find((c) => c.id === locationId);
  if (!foundLocation) {
    throw new HttpError("Location not found", 404);
  }

  DUMMY_LOCATIONS = DUMMY_LOCATIONS.filter((c) => c.id !== locationId);
};
