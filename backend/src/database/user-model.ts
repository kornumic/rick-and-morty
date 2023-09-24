import { User } from "../controllers/user-controllers";

export const DUMMY_USERS: User[] = [
  {
    id: 1,
    name: "Admin",
    email: "admin@test.com",
    password: "admin",
    role: "admin",
    created: "2017-11-10T12:42:04.162Z",
  },
  {
    id: 2,
    name: "User",
    email: "user@test.com",
    password: "user",
    role: "user",
    created: "2017-11-10T12:42:04.162Z",
  },
];
