import "dotenv/config";

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  databaseName: process.env.DB_NAME,
};

export default config;
