import { NextFunction, Request, Response } from "express";
import { removeEpisode, DUMMY_EPISODES } from "../database/episode-model";

import HttpError from "../util/HttpError";

export type Episode = {
  id: number | undefined;
  name: string;
  air_date: string;
  episode: string;
  characters: number[];
  created: string;
};

export const getEpisodeById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const episode = DUMMY_EPISODES.find((c) => c.id === +req.params.episodeId);
  if (!episode) {
    return next(new HttpError("Episode not found", 404));
  }
  return res.json(episode);
};

export const getAllEpisodes = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const page = +(req.query.page || "1");
  const episodesPerPage = +(req.query.perPage || "20");
  const offset = (page - 1) * episodesPerPage;

  // calculate info values
  const count = DUMMY_EPISODES.length;
  const pages = Math.ceil(count / episodesPerPage);
  const nextPage = page + 1 <= pages ? page + 1 : undefined;
  const prevPage = page - 1 > 0 ? page - 1 : undefined;

  if (page > pages || page < 1)
    return next(new HttpError("Page not found", 404));
  const episodes = DUMMY_EPISODES.slice(offset, offset + episodesPerPage);

  return res
    .json({
      info: {
        count: count,
        pages: pages,
        next: nextPage,
        prev: prevPage,
      },
      results: episodes,
    })
    .status(200);
};

export const createEpisode = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const episode = req.body as Episode;
  if (episode.id) {
    return next(new HttpError("Invalid input", 422));
  }
  episode.id = DUMMY_EPISODES.length + 1;
  DUMMY_EPISODES.push(episode);

  return res.json({ episode });
};

export const updateEpisode = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const patchData = req.body as Partial<Episode>;
  const foundEpisode = DUMMY_EPISODES.find(
    (c) => c.id === +req.params.episodeId,
  );
  if (!foundEpisode) {
    return next(new HttpError("Episode not found", 404));
  }
  if (patchData.id) {
    return next(new HttpError("Invalid input", 422));
  }
  Object.assign(foundEpisode, patchData);
  return res.status(200).json(foundEpisode);
};

export const deleteEpisode = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    removeEpisode(+req.params.episodeId);
  } catch (err) {
    return next(err);
  }
  return res.status(200).json({ message: "Episode deleted" });
};
