import React from "react";
import { Character } from "./CharacterInfo";

const CharacterItem: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <div className="flex grid-cols-2 auto-cols-auto rounded-2xl items-top bg-[#181818] hover:bg-[#303030] mx-80 my-10 p-2">
      <div className="p-2">
        <img
          className="rounded-md w-32 "
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className="text-left p-2 w-full">
        <h1 className="py-4 w-full text-white text-2xl">{character.name}</h1>
        <p className="py-2 text-gray-400">{character.status}</p>
      </div>
    </div>
  );
};

export default CharacterItem;
