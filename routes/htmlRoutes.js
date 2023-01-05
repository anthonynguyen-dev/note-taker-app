const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
//localhost:3001/notes

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
//localhost:3001/

module.exports = router;
