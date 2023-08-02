import React from "react";

const CharacterMinimal: React.FC<{
  imageUrl: string;
  imageAlt?: string;
  onClick?: () => {};
}> = ({ imageUrl, imageAlt, onClick }) => {
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
