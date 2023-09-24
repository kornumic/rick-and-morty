import express from "express";

const router = express.Router();
import {
  createEpisode,
  getAllEpisodes,
  getEpisodeById,
  updateEpisode,
  deleteEpisode,
} from "../controllers/episode-controllers";

// GET /api/episode/:episodeId
router.get("/:episodeId", getEpisodeById);

// PUT /api/episode/:episodeId
router.patch("/:episodeId", updateEpisode);

// DELETE /api/episode/:episodeId
router.delete("/:episodeId", deleteEpisode);

// POST /api/episode
router.post("/", createEpisode);

// GET /api/episode?page=1&perPage=20
router.get("/", getAllEpisodes);

export default router;
