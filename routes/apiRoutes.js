const router = require("express").Router();
// const db = require("../db/db.json");
const uuid = require("uuid");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helpers/fsUtils");

router.get("/notes", (req, res) => {
  readFromFile("./db/db.json")
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => res.status(500).json(err));
});

// app.post("/notes", (req, res) => {
//   let db = fs.readFileSync("db/db.json");
//   db = JSON.parse(db);
//   res.json(db);

//   let userNote = {
//     title: req.body.title,
//     text: req.body.text,
//     id: uuidv1(),
//   };
//   db.push(userNote);
//   fs.writeFileSync("db/db.json", JSON.stringify(db));
//   res.json(db);
// });

module.exports = router;
