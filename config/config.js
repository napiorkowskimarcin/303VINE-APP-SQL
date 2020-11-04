const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "8mlody8",
  database: "vine_db",
  host: "localhost",
  port: "5432",
});

module.exports = pool;
