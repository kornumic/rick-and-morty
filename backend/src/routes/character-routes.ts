import express from "express";

const router = express.Router();

import { DUMMY_CHARACTERS } from "./dummies";

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

// GET /api/character/:characterId
router.get("/:characterId", (req, res) => {
  console.log(req.params.characterId);
  const character = DUMMY_CHARACTERS.find(
    (c) => c.id === +req.params.characterId,
  );
  console.log(character);
  if (!character) {
    return res.status(404).json({ message: "Character not found" });
  }
  res.json(character);
});

// POST /api/character
router.post("/", (req, res) => {
  const character = req.body as Character;
  character.id = DUMMY_CHARACTERS.length + 1;
  DUMMY_CHARACTERS.push(character);

  res.json({ character });
});

// GET /api/character?page=1&perPage=20
router.get("/", (req, res) => {
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
});

export default router;
