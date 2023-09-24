import { DUMMY_CHARACTERS, removeCharacter } from "../database/character-model";
import { NextFunction, Request, Response } from "express";
import HttpError from "../models/HttpError";

export type Character = {
  id: number | undefined;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: number | undefined;
  location: number | undefined;
  image: string;
  episode: number[];
  created: string;
};

export const getCharacterById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const character = DUMMY_CHARACTERS.find(
    (c) => c.id === +req.params.characterId,
  );
  if (!character) {
    return next(new HttpError("Character not found", 404));
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

  // calculate info values
  const count = DUMMY_CHARACTERS.length;
  const pages = Math.ceil(count / charactersPerPage);
  const nextPage = page + 1 <= pages ? page + 1 : undefined;
  const prevPage = page - 1 > 0 ? page - 1 : undefined;

  if (page > pages || page < 1) {
    return next(new HttpError("Page not found", 404));
  }

  const characters = DUMMY_CHARACTERS.slice(offset, offset + charactersPerPage);

  return res
    .json({
      info: {
        count: count,
        pages: pages,
        next: nextPage,
        prev: prevPage,
      },
      results: characters,
    })
    .status(200);
};

export const createCharacter = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const character = req.body as Character;
  if (character.id) {
    return next(new HttpError("Invalid input", 422));
  }
  character.id = DUMMY_CHARACTERS.length + 1;
  DUMMY_CHARACTERS.push(character);

  return res.json({ character });
};

export const updateCharacter = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const patchData = req.body as Partial<Character>;
  const foundCharacter = DUMMY_CHARACTERS.find(
    (c) => c.id === +req.params.characterId,
  );
  if (!foundCharacter) {
    return next(new HttpError("Character not found", 404));
  }
  if (patchData.id) {
    return next(new HttpError("Invalid input", 422));
  }
  Object.assign(foundCharacter, patchData);
  return res.json(foundCharacter).status(200);
};

export const deleteCharacter = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    removeCharacter(+req.params.characterId);
  } catch (err) {
    return next(err);
  }
  return res.status(200).json({ message: "Character deleted" });
};
