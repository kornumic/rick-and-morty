import { NextFunction, Request, Response } from "express";
import { DUMMY_EPISODES } from "./dummies";

import { Episode } from "../routes/episode-routes";

export const getEpisodeById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(req.params.episodeId);
  const episode = DUMMY_EPISODES.find((c) => c.id === +req.params.episodeId);
  console.log(episode);
  if (!episode) {
    return res.status(404).json({ message: "Episode not found" });
  }
  res.json(episode);
};

export const getAllEpisodes = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const page = +(req.query.page || "1");
  const episodesPerPage = +(req.query.perPage || "20");
  const offset = (page - 1) * episodesPerPage;

  const episodes = DUMMY_EPISODES.slice(offset, offset + episodesPerPage);

  res.json({
    info: {
      count: DUMMY_EPISODES.length,
      pages: Math.ceil(DUMMY_EPISODES.length / episodesPerPage),
      next:
        page + 1 <= Math.ceil(DUMMY_EPISODES.length / episodesPerPage)
          ? page + 1
          : undefined,
      prev: page - 1 > 0 ? page - 1 : undefined,
    },
    results: episodes,
  });
  res.status(200);
};

export const createEpisode = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const episode = req.body as Episode;
  episode.id = DUMMY_EPISODES.length + 1;
  DUMMY_EPISODES.push(episode);

  res.json({ episode });
};
