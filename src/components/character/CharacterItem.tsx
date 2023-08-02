import React from "react";
import { Character } from "./CharacterInfo";
import Status from "./Status";

const CharacterItem: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <div className="flex grid-cols-2 auto-cols-auto rounded-2xl items-top bg-[#181818] hover:bg-[#303030] hover:border border-white mx-96 transition-all my-3 p-2">
      <div className="p-2">
        <img
          className="rounded-md w-32 "
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className="text-left m-4 w-full">
        <h1 className="py-4 w-full text-white text-2xl">{character.name}</h1>
        <Status status={character.status} />
      </div>
    </div>
  );
};

export default CharacterItem;
