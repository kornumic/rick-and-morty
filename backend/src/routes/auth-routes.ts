import express from "express";
import { login, signup } from "../controllers/auth-controllers";

const router = express.Router();

// POST /api/signup
router.post("/signup", signup);

router.post("/login", login);

export default router;
