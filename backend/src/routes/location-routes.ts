import express from "express";

const router = express.Router();
import {
  createLocation,
  deleteLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
} from "../controllers/location-controllers";

// GET /api/location/:locationId
router.get("/:locationId", getLocationById);

// PUT /api/location/:locationId
router.patch("/:locationId", updateLocation);

// DELETE /api/location/:locationId
router.delete("/:locationId", deleteLocation);

// POST /api/location
router.post("/", createLocation);

// GET /api/location?page=1&perPage=20
router.get("/", getAllLocations);

export default router;
