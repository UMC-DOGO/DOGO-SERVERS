const mysql = require("mysql2/promise");
const { logger } = require("./winston");

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "leejiwon0176!",
  database: "dogo",
});

module.exports = {
  pool: pool,
};
