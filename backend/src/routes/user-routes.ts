import express, { Request, Response } from "express";

const router = express.Router();

router.get(":userId", (req: Request, res: Response) => {
  res.json({ message: "User data + created entities" });
});

router.get(":userId/profile", (req: Request, res: Response) => {
  res.json({ message: "User profile" });
});

// user/:userId/characters?page=1&perPage=10
router.get(":userId/characters", (req: Request, res: Response) => {
  res.json({ message: "User created characters" });
});

// user/:userId/episodes?page=1&perPage=10
router.get(":userId/episodes", (req: Request, res: Response) => {
  res.json({ message: "User created episodes" });
});

// user/:userId/locations?page=1&perPage=10
router.post(":userId/locations", (req: Request, res: Response) => {
  res.json({ message: "User created locations" });
});

// user/:userId/favorite-characters?page=1&perPage=10
router.get(":userId/favorite-characters", (req: Request, res: Response) => {
  res.json({ message: "User favorite characters" });
});

// user/:userId/favorite-episodes?page=1&perPage=10
router.get(":userId/favorite-episodes", (req: Request, res: Response) => {
  res.json({ message: "User favorite episodes" });
});

// user/:userId/favorite-locations?page=1&perPage=10
router.post(":userId/favorite-locations", (req: Request, res: Response) => {
  res.json({ message: "User favorite locations" });
});

export default router;
