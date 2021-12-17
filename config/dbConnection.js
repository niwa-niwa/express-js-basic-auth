const mysql = require("mysql2");

const dbClient = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

dbClient.connect(function (err) {
  if (err) {
    console.error("error database connecting: " + err.stack);
    return;
  }

  console.log("database connected as id " + dbClient.threadId);
});

module.exports = dbClient;
