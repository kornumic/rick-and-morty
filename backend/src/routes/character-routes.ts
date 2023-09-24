import express from "express";

const router = express.Router();
import {
  createCharacter,
  deleteCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
} from "../controllers/character-controllers";
import { checkAuth } from "../controllers/auth-controllers";

// GET /api/character/:characterId
router.get("/:characterId", getCharacterById);

// PUT /api/character/:characterId
router.patch("/:characterId", checkAuth, updateCharacter);

// DELETE /api/character/:characterId
router.delete("/:characterId", checkAuth, deleteCharacter);

// POST /api/character
router.post("/", checkAuth, createCharacter);

// GET /api/character?page=1&perPage=20
router.get("/", getAllCharacters);

export default router;
