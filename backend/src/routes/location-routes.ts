import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "location works" });
});

export default router;
