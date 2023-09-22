import { Character } from "../routes/character-routes";
import { Episode } from "../routes/episode-routes";
import { Location } from "../routes/location-routes";

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

export const DUMMY_LOCATIONS: Location[] = [
  {
    id: 1,
    name: "Earth (C-137)",
    type: "Planet",
    dimension: "Dimension C-137",
    residents: [
      38, 45, 71, 82, 83, 92, 112, 114, 116, 117, 120, 127, 155, 169, 175, 179,
      186, 201, 216, 239, 271, 302, 303, 338, 343, 356, 394,
    ],
    created: "2017-11-10T12:42:04.162Z",
  },
];
