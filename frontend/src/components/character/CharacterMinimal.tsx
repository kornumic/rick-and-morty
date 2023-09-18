import React from "react";
import { useNavigate } from "react-router";

const CharacterMinimal: React.FC<{
  imageUrl: string;
  imageAlt?: string;
  to: string;
}> = ({ imageUrl, imageAlt, to }) => {
  const navigate = useNavigate();
  const onClick = (to: string, event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    navigate(to);
  };

  return (
    <button onClick={onClick.bind(null, to)}>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="rounded-full w-10 min-h-min p-0.5"
      />
    </button>
  );
};

export default CharacterMinimal;
