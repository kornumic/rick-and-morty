import { Character } from "./character-routes";

export const DUMMY_CHARACTERS: Character[] = [
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
    created: "2017-11-04T18:50:21.651Z",
  },
];
