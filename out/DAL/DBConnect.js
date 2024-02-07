"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("pg").defaults.debug = true;
// Set the debug namespace for pg library
process.env.DEBUG = "app:pg";
exports.pool = new pg_1.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
});
exports.pool
    .connect()
    .then(function () { return console.log("Connected to PostgreSQL"); })
    .catch(function (err) { return console.error("Error connecting to PostgreSQL", err); });
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
//# sourceMappingURL=DBConnect.js.map