import { createPool } from "mysql2/promise";
import config from "./config/config.js";

let pool;

async function initializePool() {
  if (!pool) {
    pool = createPool({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
      database: config.databaseName,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
}

async function getConnection() {
  if (!pool) {
    await initializePool();
  }
  return pool.getConnection();
}

export { initializePool, getConnection };
