import React from "react";
import { Episode } from "./EpisodeInfo";
import CharacterMinimalList from "../character/CharacterMinimalList";
import { EPISODE_EXTRA } from "../../move-to-be/episode-extra";

const EpisodeItem: React.FC<{ episode: Episode }> = ({ episode }) => {
  const extra = EPISODE_EXTRA[episode.id - 1];
  return (
    <div className="flex flex-col rounded-2xl h-64 items-top bg-[#181818] hover:bg-[#303030] border-white transition-all m-4 p-4 ">
      <div>
        <h1 className="text-3xl transition-all">{episode.name}</h1>
        <img src={extra.img} alt={extra.title} />
        <p>{extra.description}</p>
      </div>
      <div className="flex flex-col justify-end items-start h-full">
        <p className="text-xl">Characters in this episode:</p>
        <CharacterMinimalList characters={episode.characters} />
      </div>
    </div>
  );
};

export default EpisodeItem;
