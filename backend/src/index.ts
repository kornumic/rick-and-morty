import express, { Request, Response, Application, NextFunction } from "express";

import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config({ path: __dirname + "/../.env" });

import characterRoutes from "./routes/character-routes";
import episodeRoutes from "./routes/episode-routes";
import locationRoutes from "./routes/location-routes";
import authRoutes from "./routes/auth-routes";
import HttpError from "./util/HttpError";
import userRoutes from "./routes/user-routes";

import { sequelize } from "./util/database";
import { CharacterModel } from "./database/character-model";
import { UserModel } from "./database/user-model";

const app: Application = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/character", characterRoutes);
app.use("/api/episode", episodeRoutes);
app.use("/api/location", locationRoutes);

app.use("/api", (req: Request, res: Response, next: NextFunction) => {
  return next(new HttpError("Route not found", 404));
});

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("Serving static files");
  return res.send("Hello World!");
});

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  console.log(error.status);
  error.status = error.status || 500;
  return res.status(error.status).json({ message: error.message });
});

CharacterModel.hasOne(UserModel);
UserModel.hasMany(CharacterModel);

const run = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    // await sequelize.sync({ force: true });
    console.log("Connected to database.");

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

run().then();
