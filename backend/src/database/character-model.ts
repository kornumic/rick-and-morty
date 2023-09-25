import { Character } from "../controllers/character-controllers";
import HttpError from "../util/HttpError";

export let DUMMY_CHARACTERS: Character[] = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: 1,
    location: 3,
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
    ],
    created: "2017-11-04T18:48:46.250Z",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: undefined,
    location: 3,
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    episode: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
    ],
    created: "2017-11-04T18:50:21.651Z",
  },
];

export const removeCharacter = (characterId: number) => {
  const foundCharacter = DUMMY_CHARACTERS.find((c) => c.id === characterId);
  if (!foundCharacter) {
    throw new HttpError("Character not found", 404);
  }

  DUMMY_CHARACTERS = DUMMY_CHARACTERS.filter((c) => c.id !== characterId);
};
