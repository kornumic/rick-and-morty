import { Sequelize } from "sequelize";

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_URL } = process.env;
if (!POSTGRES_USER || !POSTGRES_PASSWORD || !POSTGRES_URL)
  throw new Error("Missing env variables");

export const sequelize = new Sequelize(
  `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_URL}`,
);
