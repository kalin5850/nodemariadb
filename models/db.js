const mariadb = require("mariadb");
const dbConfig = require("../config/db.config.js");
const pool = mariadb.createPool({
  connectionLimit: 10,
  host: dbConfig.dev.HOST,
  user: dbConfig.dev.USER,
  password: dbConfig.dev.PASSWORD,
  database: dbConfig.dev.DB,
  useConnectionPooling: true,
});

async function getDBConnection() {
  let conn = await pool.getConnection();
  // console.log(conn);
  return conn;
}

module.exports = getDBConnection();
// getDBConnection();
