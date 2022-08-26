const { Pool, Client } = require("pg");
require("dotenv").config();

const {
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_PORT,
  DATABASE_HOST,
} = process.env;

const pool = new Pool({
  user: DATABASE_USER,
  database: DATABASE_NAME,
  password: DATABASE_PASSWORD,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
});

module.exports = pool;
