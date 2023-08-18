import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { TailwindClass } from "../../types/tailwind-types";

const StarIcon: React.FC<{
  starred: undefined | boolean;
  onChangeFavorite: (event: React.MouseEvent<HTMLElement>) => void;
}> = ({ starred, onChangeFavorite }) => {
  const styles: TailwindClass = "w-10 h-10";
  return (
    <button className={styles} onClick={onChangeFavorite}>
      {starred ? (
        <AiFillStar className={styles} />
      ) : (
        <AiOutlineStar className={styles} />
      )}
    </button>
  );
};

export default StarIcon;
