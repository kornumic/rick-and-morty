import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import * as mongoose from "mongoose";

dotenv.config({ path: __dirname + "/../.env" });
const { MONGO_USER, MONGO_PASSWORD, MONGO_CLUSTER } = process.env;

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

mongoose
  .connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}?retryWrites=true&w=majority`,
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is Fire at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
