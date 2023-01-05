const { application } = require("express");
const db = require("../db/db.json");

application.get('/api/notes,'(req, res) => res.json(db));
