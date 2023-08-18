import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { TailwindClass } from "../../types/tailwind-types";

const StarIcon: React.FC<{
  starred: undefined | boolean;
  onChangeFavorite?: () => void;
}> = ({ starred, onChangeFavorite }) => {
  const styles: TailwindClass = "w-16 h-16";
  return (
    <div className={styles} onClick={onChangeFavorite}>
      {starred ? (
        <AiFillStar className={styles} />
      ) : (
        <AiOutlineStar className={styles} />
      )}
    </div>
  );
};

export default StarIcon;
