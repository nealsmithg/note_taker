const path = require("path");
const express = require("express");
const app = express();

app.get("/api/notes", (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});