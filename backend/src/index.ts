import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config({ path: __dirname + "/../.env" });

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_URL } = process.env;
if (!POSTGRES_USER || !POSTGRES_PASSWORD || !POSTGRES_URL)
  throw new Error("Missing env variables");

const sequelize = new Sequelize(
  `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_URL}`,
);

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

const run = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    app.listen(PORT, () => {
      console.log(`Server is Fire at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

run().then();
