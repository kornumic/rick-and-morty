import express from "express";

const router = express.Router();
import {
  createEpisode,
  getAllEpisodes,
  getEpisodeById,
} from "../controllers/episode-controllers";

export type Episode = {
  id: number | undefined;
  name: string;
  air_date: string;
  episode: string;
  characters: number[];
  created: string;
};

// GET /api/episode/:episodeId
router.get("/:episodeId", getEpisodeById);

// POST /api/episode
router.post("/", createEpisode);

// GET /api/episode?page=1&perPage=20
router.get("/", getAllEpisodes);

export default router;
