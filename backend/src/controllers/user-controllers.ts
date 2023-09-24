export type User = {
  id: number | undefined;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  created: string;
};
