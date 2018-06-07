"use strict";

const pg = require("pg");
const pool = new pg.Pool({

  user:"postgres",
  password: "john",
  host: "localhost",
  port: 5432,
  database: "db_practice",
  ssl: false
});

module.exports = pool;