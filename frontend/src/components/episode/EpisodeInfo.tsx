import React from "react";

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
  starred: boolean | undefined;
};

const EpisodeInfo: React.FC<{
  episode: Episode;
}> = ({ episode }) => {
  return (
    <div>
      <h1>{episode.id}</h1>
      <p>{episode.air_date}</p>
      <p>{episode.episode}</p>
    </div>
  );
};

export default EpisodeInfo;
