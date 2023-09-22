import { DUMMY_CHARACTERS } from "./dummies";
import { NextFunction, Request, Response } from "express";
import { Character } from "../routes/character-routes";

export const getCharacterById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const character = DUMMY_CHARACTERS.find(
    (c) => c.id === +req.params.characterId,
  );
  console.log(character);
  if (!character) {
    return res.status(404).json({ message: "Character not found" });
  }
  res.json(character);
};

export const getAllCharacters = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const page = +(req.query.page || "1");
  const charactersPerPage = +(req.query.perPage || "20");
  const offset = (page - 1) * charactersPerPage;

  const characters = DUMMY_CHARACTERS.slice(offset, offset + charactersPerPage);

  res.json({
    info: {
      count: DUMMY_CHARACTERS.length,
      pages: Math.ceil(DUMMY_CHARACTERS.length / charactersPerPage),
      next:
        page + 1 <= Math.ceil(DUMMY_CHARACTERS.length / charactersPerPage)
          ? page + 1
          : undefined,
      prev: page - 1 > 0 ? page - 1 : undefined,
    },
    results: characters,
  });
  res.status(200);
};

export const createCharacter = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const character = req.body as Character;
  character.id = DUMMY_CHARACTERS.length + 1;
  DUMMY_CHARACTERS.push(character);

  res.json({ character });
};

export const updateCharacter = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.json({ message: "updateCharacter" });
};

export const deleteCharacter = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.json({ message: "deleteCharacter" });
};
