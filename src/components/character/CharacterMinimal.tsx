import React from "react";

const CharacterMinimal: React.FC<{
  imageUrl: string;
  imageAlt?: string;
  onClick?: () => {};
}> = ({ imageUrl, imageAlt, onClick }) => {
  // const extractCharacterIds = (characters: string[]) => {
  //   const charactersIds: string[] = [];
  //   for (const character of characters) {
  //     charactersIds.push(character.split("character/")[1]);
  //   }
  //
  //   return charactersIds;
  // };

  return (
    <div>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="rounded-full w-12 p-1"
        onClick={onClick}
      />
    </div>
  );
};

export default CharacterMinimal;
