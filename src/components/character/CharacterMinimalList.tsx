import React from "react";
import CharacterMinimal from "./CharacterMinimal";
import { CHARACTER_IMAGE_URL } from "../constants/rmapi-urls";

const CharacterMinimalList: React.FC<{
  characters: string[];
  quantity?: number;
}> = ({ characters, quantity }) => {
  const extractIdFromUrl = (characterUrl: string) => {
    const id = +characterUrl.split("character/")[1];
    const src = CHARACTER_IMAGE_URL + id.toString() + ".jpeg";
    const alt = "Character " + id.toString();

    return { src, alt, id };
  };

  const chosenCharacters =
    quantity && characters.length > quantity
      ? characters.slice(0, quantity)
      : characters;

  return (
    <ul className="flex flex-row-auto items-center justify-center h-14 w-full ">
      {chosenCharacters.map((character) => {
        const { src, alt, id } = extractIdFromUrl(character);
        return (
          <li key={id}>
            <CharacterMinimal
              imageUrl={src}
              imageAlt={alt}
              to={`/characters/${id}`}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CharacterMinimalList;
