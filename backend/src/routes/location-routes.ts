import express from "express";

const router = express.Router();
import {
  createLocation,
  getAllLocations,
  getLocationById,
} from "../controllers/location-controllers";

export type Location = {
  id: number | undefined;
  name: string;
  type: string;
  dimension: string;
  residents: number[];
  created: string;
};

// GET /api/location/:locationId
router.get("/:locationId", getLocationById);

// POST /api/location
router.post("/", createLocation);

// GET /api/location?page=1&perPage=20
router.get("/", getAllLocations);

export default router;
