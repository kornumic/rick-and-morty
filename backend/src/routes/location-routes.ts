import express from "express";

const router = express.Router();
import {
  createLocation,
  deleteLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
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

// PUT /api/location/:locationId
router.put("/:episodeId", updateLocation);

// DELETE /api/location/:locationId
router.delete("/:episodeId", deleteLocation);

// POST /api/location
router.post("/", createLocation);

// GET /api/location?page=1&perPage=20
router.get("/", getAllLocations);

export default router;
