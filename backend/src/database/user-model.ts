import { sequelize } from "../util/database";
import { DataTypes, Model, Optional } from "sequelize";

export type Role = "admin" | "user";

export interface User {
  id: number | undefined;
  name: string;
  email: string;
  password: string;
  role: Role;
}

interface UserCreation extends Optional<User, "id"> {}

interface UserInstance extends Model<User, UserCreation>, User {
  createdAt?: Date;
  updatedAt?: Date;
}

export const UserModel = sequelize.define<UserInstance>("user-model", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export const DUMMY_USERS: User[] = [
  {
    id: 1,
    name: "Admin",
    email: "admin@test.com",
    password: "$2b$12$c1cys.NvGnFfPQWUY6tFMedEDqP3W3cmGBAcMpn93oOA2.4tGjoK6",
    role: "admin",
  },
  {
    id: 2,
    name: "User",
    email: "user@test.com",
    password: "$2b$12$r3d0UOB0JLxRPxiDLkneg.N4X1.o9is/.cghLsnMKOoP4serXqL72",
    role: "user",
  },
];
