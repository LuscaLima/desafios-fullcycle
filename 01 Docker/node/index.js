const express = require("express");
const app = express();
const mysql = require("mysql");

const PORT = 3000;
const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "dbase",
});

let results = [];

connection.query("SELECT * FROM people;", (err, res) => {
  if (err) throw err;
  results = res;
});
connection.end();

app.get("/", (req, res) => {
  return res.send(`
    <h1>Full Cycle Rocks!</h1>
    <ul>
      ${results.map((result) => `<li>${result.name}</li>`).join(" ")}
    </ul>
  `);
});

app.listen(PORT, () => {
  console.log("Rodando na porta " + PORT);
});
