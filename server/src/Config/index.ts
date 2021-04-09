import { config } from "dotenv";
//config environment variable
config();

export const ENV = {
  PORT: process.env.PORT,
  IN_PROD: process.env.MODE === "dev",
};
