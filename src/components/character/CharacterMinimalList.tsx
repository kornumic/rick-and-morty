import React from "react";
import CharacterMinimal from "./CharacterMinimal";
import { Link } from "react-router-dom";

const DUMMY_IMAGES = [
  {
    id: 1,
    src: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    alt: "Rick Sanchez",
  },
  {
    id: 2,
    src: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    alt: "Morty Smith",
  },
  {
    id: 3,
    src: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    alt: "Summer Smith",
  },
  {
    id: 4,
    src: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    alt: "Beth Smith",
  },
  {
    id: 5,
    src: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    alt: "Jerry Smith",
  },
];

const CharacterMinimalList: React.FC = () => {
  return (
    <ul className="flex flex-row items-center justify-center h-14 w-52 ">
      {DUMMY_IMAGES.map((image) => {
        return (
          <li key={image.id}>
            <Link to={`episode/${image.id}`}>
              <CharacterMinimal imageUrl={image.src} imageAlt={image.alt} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CharacterMinimalList;
