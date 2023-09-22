import express, { Request, Response, Application } from "express";
import { Sequelize } from "sequelize";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config({ path: __dirname + "/../.env" });

import characterRoutes from "./routes/character-routes";
import episodeRoutes from "./routes/episode-routes";
import locationRoutes from "./routes/location-routes";
import authRoutes from "./routes/auth-routes";

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_URL } = process.env;
if (!POSTGRES_USER || !POSTGRES_PASSWORD || !POSTGRES_URL)
  throw new Error("Missing env variables");

const sequelize = new Sequelize(
  `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_URL}`,
);

const app: Application = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/character", characterRoutes);
app.use("/api/episode", episodeRoutes);
app.use("/api/location", locationRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
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
