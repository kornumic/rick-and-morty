import React from "react";
import { Link } from "react-router-dom";

const CharacterMinimal: React.FC<{
  imageUrl: string;
  imageAlt?: string;
  to: string;
}> = ({ imageUrl, imageAlt, to }) => {
  return (
    <Link to={to}>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="rounded-full w-10 min-h-min p-0.5"
      />
    </Link>
  );
};

export default CharacterMinimal;
