import {
  // CharacterModel,
  DUMMY_CHARACTERS,
  removeCharacter,
} from "../database/character-model";
import { NextFunction, Request, Response } from "express";
import HttpError from "../util/HttpError";
import { Character } from "../database/character-model";
// import { UserModel } from "../database/user-model";

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

export const getAllCharacters = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const page = +(req.query.page || "1");
  const charactersPerPage = +(req.query.perPage || "20");
  const offset = (page - 1) * charactersPerPage;

  // const charactersAndCount = await CharacterModel.findAndCountAll({
  //   limit: charactersPerPage,
  //   offset: offset,
  // });

  // const count = charactersAndCount.count;
  // const pages = Math.ceil(count / charactersPerPage);
  // const nextPage = page + 1 <= pages ? page + 1 : undefined;
  // const prevPage = page - 1 > 0 ? page - 1 : undefined;
  // const characters = charactersAndCount.rows;

  // if (page > pages || page < 1) {
  //   return next(new HttpError("Page not found", 404));
  // }
  // return res
  //   .json({
  //     info: {
  //       count: count,
  //       pages: pages,
  //       next: nextPage,
  //       prev: prevPage,
  //     },
  //     results: characters,
  //   })
  //   .status(200);
};

export const createCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userId = req.body.userAuthData.userId;
  if (!userId) {
    console.log(userId);
    return next(new HttpError("Unauthorized", 403));
  }
  // const fetchedUser = await UserModel.findByPk(userId);
  // if (!fetchedUser) {
  //   return next(new HttpError("Unauthorized", 403));
  // }

  const characterData = req.body as Character;
  if (characterData.id) {
    return next(new HttpError("Invalid input", 422));
  }
  try {
    // const newCharacter = await CharacterModel.create({
    //   name: characterData.name,
    //   status: characterData.status,
    //   species: characterData.species,
    //   type: characterData.type,
    //   gender: characterData.gender,
    //   image: characterData.image,
    //   lock: "unlocked",
    //   userId: fetchedUser.id,
    // });
    // return res.status(201).json(newCharacter);
  } catch (err) {
    console.log(err);
    return next(new HttpError("Something went wrong", 500));
  }
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
  return res.status(200).json(foundCharacter);
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
