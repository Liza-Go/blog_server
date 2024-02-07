import { error, log } from "console";
import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

require("pg").defaults.debug = true;

// Set the debug namespace for pg library
process.env.DEBUG = "app:pg";

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Error connecting to PostgreSQL", err));

// async function connect() {
//   try {
//     await client.connect();
//     console.log("Connected to PostgreSQL:", "Connected to PostgreSQL");
//   } catch (error) {
//     console.error("Error connecting to PostgreSQL", error);
//   }
// }
// connect();

// export function getClient(): Client {
//   return client;
// }
