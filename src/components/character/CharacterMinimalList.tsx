import React from "react";
import CharacterMinimal from "./CharacterMinimal";
import { Link } from "react-router-dom";
import { CHARACTER_IMAGE_URL } from "../constants/rmapi-urls";

const CharacterMinimalList: React.FC<{
  characters: string[];
}> = ({ characters }) => {
  const extractIdFromUrl = (characterUrl: string) => {
    const id = +characterUrl.split("character/")[1];
    const src = CHARACTER_IMAGE_URL + id.toString() + ".jpeg";
    const alt = "Character " + id.toString();

    return { src, alt, id };
  };

  const chosenCharacters = characters.slice(0, 10);

  return (
    <ul className="flex flex-row-auto items-center justify-center h-14 w-full ">
      {chosenCharacters.map((character) => {
        const { src, alt, id } = extractIdFromUrl(character);
        return (
          <li key={id}>
            <Link to={`/characters/${id}`}>
              <CharacterMinimal imageUrl={src} imageAlt={alt} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CharacterMinimalList;
