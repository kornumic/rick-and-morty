import express from "express";

const router = express.Router();

// POST /api/signup
router.post("/signup", (req, res) => {
  res.json({ message: "signing up" });
});

router.post("/login", (req, res) => {
  res.json({ message: "logging in" });
});

export default router;
