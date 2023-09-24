import express from "express";

const router = express.Router();
import {
  createLocation,
  deleteLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
} from "../controllers/location-controllers";
import { checkAuth } from "../controllers/auth-controllers";

// GET /api/location/:locationId
router.get("/:locationId", getLocationById);

// PUT /api/location/:locationId
router.patch("/:locationId", checkAuth, updateLocation);

// DELETE /api/location/:locationId
router.delete("/:locationId", checkAuth, deleteLocation);

// POST /api/location
router.post("/", checkAuth, createLocation);

// GET /api/location?page=1&perPage=20
router.get("/", getAllLocations);

export default router;
