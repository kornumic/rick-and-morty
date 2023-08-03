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
        className="rounded-full w-10 min-h-min p-0.5"
        onClick={onClick}
      />
    </div>
  );
};

export default CharacterMinimal;
