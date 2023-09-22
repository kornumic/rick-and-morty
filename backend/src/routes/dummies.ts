import { Character } from "./character-routes";
import { Episode } from "./episode-routes";

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

export const DUMMY_EPISODES: Episode[] = [
  {
    id: 1,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
    characters: [
      1, 2, 35, 38, 62, 92, 127, 144, 158, 175, 179, 181, 239, 249, 271, 338,
      394, 395, 435,
    ],
    created: "2017-11-10T12:56:33.798Z",
  },
];
