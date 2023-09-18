import React from "react";
import Status from "./Status";

export type CharacterLocation = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocation | undefined;
  location: CharacterLocation | undefined;
  image: string;
  episode: string[];
  url: string;
  created: string;
  starred: boolean | undefined;
};

const CharacterInfo: React.FC<{
  character: Character;
}> = ({ character }) => {
  return (
    <div className="flex-col">
      <h1 className="text-xl text-center">{character.name}</h1>
      <div className="flex justify-center">
        <img src={character.image} alt={character.name} />
      </div>
      <Status status={character.status} />
      <p className="text-center">{character.species}</p>
      <p className="text-center">{character.type}</p>
      <p className="text-center">{character.gender}</p>
      <p className="text-center">{character.origin?.name}</p>
      <p className="text-center">{character.location?.name}</p>
      <p className="text-center">{character.url}</p>
      <p className="text-center">{character.created}</p>
    </div>
  );
};

export default CharacterInfo;
