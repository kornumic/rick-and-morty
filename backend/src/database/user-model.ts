import { User } from "../controllers/user-controllers";

export const DUMMY_USERS: User[] = [
  {
    id: 1,
    name: "Admin",
    email: "admin@test.com",
    password: "$2b$12$c1cys.NvGnFfPQWUY6tFMedEDqP3W3cmGBAcMpn93oOA2.4tGjoK6",
    role: "admin",
    created: "2017-11-10T12:42:04.162Z",
  },
  {
    id: 2,
    name: "User",
    email: "user@test.com",
    password: "$2b$12$r3d0UOB0JLxRPxiDLkneg.N4X1.o9is/.cghLsnMKOoP4serXqL72",
    role: "user",
    created: "2017-11-10T12:42:04.162Z",
  },
];
