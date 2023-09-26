// import { sequelize } from "../util/database";
// import { DataTypes, Model, Optional } from "sequelize";

export type Role = "admin" | "user";

export interface User {
  id: number | undefined;
  name: string;
  email: string;
  password: string;
  role: Role;
}

// interface UserCreation extends Optional<User, "id"> {}
//
// interface UserInstance extends Model<User, UserCreation>, User {
//   createdAt?: Date;
//   updatedAt?: Date;
// }
//
// export const UserModel = sequelize.define<UserInstance>("user-model", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   role: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });
