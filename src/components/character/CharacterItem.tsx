import React from "react";
import { Character } from "./CharacterInfo";
import Status from "./Status";
import StarIcon from "../layout/StarIcon";
import { useNavigate } from "react-router";

const CharacterItem: React.FC<{
  character: Character;
  to?: string;
}> = ({ character, to }) => {
  const navigate = useNavigate();
  const onNavigate = () => {
    if (to) {
      navigate(to);
    }
  };
  const onChangeFavorite = () => {
    character.starred = !character.starred;
    console.log(character.starred);
  };

  return (
    <div
      onClick={onNavigate}
      className="flex grid-cols-3 rounded-2xl items-top bg-[#181818] hover:bg-[#303030] border-white transition-all my-3 p-2"
    >
      <div className="p-2 h-fit w-fit">
        <img
          className="rounded-md w-36"
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className="text-left mx-4 w-full ">
        <h1 className="py-4 w-full text-white text-2xl">{character.name}</h1>
        <div className="flex flex-row w-fit ">
          <Status status={character.status} />
        </div>
      </div>
      <div className="flex flex-row items-center">
        <StarIcon
          starred={character.starred}
          onChangeFavorite={onChangeFavorite}
        />
      </div>
    </div>
  );
};

export default CharacterItem;
