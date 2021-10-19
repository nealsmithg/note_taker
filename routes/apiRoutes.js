const path = require("path");
const { readFromFile} = require("../db/store");
const router = require("express").Router();


router.get("/notes", (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = router;