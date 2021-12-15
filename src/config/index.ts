import dotenv from "dotenv";
dotenv.config();

const config = {
  MONGO_DB_CONNECTION_URL: process.env.MONGO_DB_CONNECTION_URL
};

export default config;
