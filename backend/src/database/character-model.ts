import HttpError from "../util/HttpError";
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../util/database";

export type Lock = "unlocked" | "locked";

export type Character = {
  id: number | undefined;
  name: string;
  status: string | null;
  species: string | null;
  type: string | null;
  gender: string;
  image: string;
  lock: Lock | null;
  userId?: number;
};

interface CharacterCreation extends Optional<Character, "id"> {}

interface CharacterInstance
  extends Model<Character, CharacterCreation>,
    Character {
  createdAt?: Date;
  updatedAt?: Date;
}

export const CharacterModel = sequelize.define<CharacterInstance>(
  "character-model",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lock: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

export let DUMMY_CHARACTERS: Character[] = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    lock: "unlocked",
    userId: 1,
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    lock: "unlocked",
    userId: 1,
  },
];

export const removeCharacter = (characterId: number) => {
  const foundCharacter = DUMMY_CHARACTERS.find((c) => c.id === characterId);
  if (!foundCharacter) {
    throw new HttpError("Character not found", 404);
  }

  DUMMY_CHARACTERS = DUMMY_CHARACTERS.filter((c) => c.id !== characterId);
};
