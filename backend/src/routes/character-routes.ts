import express from "express";

const router = express.Router();
import {
  createCharacter,
  deleteCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
} from "../controllers/character-controllers";

// GET /api/character/:characterId
router.get("/:characterId", getCharacterById);

// PUT /api/character/:characterId
router.patch("/:characterId", updateCharacter);

// DELETE /api/character/:characterId
router.delete("/:characterId", deleteCharacter);

// POST /api/character
router.post("/", createCharacter);

// GET /api/character?page=1&perPage=20
router.get("/", getAllCharacters);

export default router;
