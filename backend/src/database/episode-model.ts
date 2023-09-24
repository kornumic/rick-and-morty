import { Episode } from "../controllers/episode-controllers";
import HttpError from "../models/HttpError";

export let DUMMY_EPISODES: Episode[] = [
  {
    id: 1,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
    characters: [
      1, 2, 35, 38, 62, 92, 127, 144, 158, 175, 179, 181, 239, 249, 271, 338,
      394, 395, 435,
    ],
    created: "2017-11-10T12:56:33.798Z",
  },
];

export const removeEpisode = (episodeId: number) => {
  const foundEpisode = DUMMY_EPISODES.find((c) => c.id === episodeId);
  if (!foundEpisode) {
    throw new HttpError("Episode not found", 404);
  }
  DUMMY_EPISODES = DUMMY_EPISODES.filter((c) => c.id !== episodeId);
};
