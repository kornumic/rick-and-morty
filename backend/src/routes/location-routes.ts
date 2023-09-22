import express from "express";
import { DUMMY_LOCATIONS } from "../controllers/dummies";

const router = express.Router();

export type Location = {
  id: number | undefined;
  name: string;
  type: string;
  dimension: string;
  residents: number[];
  created: string;
};

// GET /api/location/:locationId
router.get("/:locationId", (req, res) => {
  console.log(req.params.locationId);
  const location = DUMMY_LOCATIONS.find((c) => c.id === +req.params.locationId);
  console.log(location);
  if (!location) {
    return res.status(404).json({ message: "Location not found" });
  }
  res.json(location);
});

// POST /api/location
router.post("/", (req, res) => {
  const location = req.body as Location;
  location.id = DUMMY_LOCATIONS.length + 1;
  DUMMY_LOCATIONS.push(location);

  res.json({ location });
});

// GET /api/location?page=1&perPage=20
router.get("/", (req, res) => {
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
});

export default router;
