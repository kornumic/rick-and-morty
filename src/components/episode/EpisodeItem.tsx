import React from "react";
import { Episode } from "./EpisodeInfo";
import CharacterMinimalList from "../character/CharacterMinimalList";

const EpisodeItem: React.FC<{ episode: Episode }> = ({ episode }) => {
  return (
    <div className="flex flex-col rounded-2xl h-64 items-top bg-[#181818] hover:bg-[#303030] border-white transition-all m-4 p-4 hover:underline underline-offset-0 hover:underline-offset-4">
      <div>
        <h1 className="text-2xl transition-all">{episode.name}</h1>
      </div>
      <div className="flex justify-end items-end h-full">
        <CharacterMinimalList />
      </div>
    </div>
  );
};

export default EpisodeItem;
