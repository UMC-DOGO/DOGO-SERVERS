const mysql = require("mysql2/promise");
const { logger } = require("./winston");

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "kelly1530*",
  database: "minjuu",
});

module.exports = {
  pool: pool,
};
