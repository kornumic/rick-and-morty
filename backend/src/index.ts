import express, { Request, Response, Application, NextFunction } from "express";
import { Sequelize } from "sequelize";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config({ path: __dirname + "/../.env" });

import characterRoutes from "./routes/character-routes";
import episodeRoutes from "./routes/episode-routes";
import locationRoutes from "./routes/location-routes";
import authRoutes from "./routes/auth-routes";
import HttpError from "./models/HttpError";
import userRoutes from "./routes/user-routes";

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_URL } = process.env;
if (!POSTGRES_USER || !POSTGRES_PASSWORD || !POSTGRES_URL)
  throw new Error("Missing env variables");

const sequelize = new Sequelize(
  `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_URL}`,
);

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

const run = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

run().then();
