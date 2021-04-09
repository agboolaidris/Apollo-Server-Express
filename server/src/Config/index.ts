import { config } from "dotenv";
//config environment variable
config();

export const ENV = {
  PORT: process.env.PORT,
  IN_PROD: process.env.MODE === "dev",
  DB: {
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DBNAME: process.env.DB_NAME,
  },
};
