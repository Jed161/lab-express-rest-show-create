// Depend
const express = require("express");
const logs = require("./controllers/logsControllers.js");
const cors = require("cors");

// Config
const app = express();

app.use(express.json());
app.use(cors());

app.use("/logs", logs);


// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the captain's log!");
  });


app.use("/404", (req, res, next) => {
    res.status(404).send("No logs at that index.");
  });

  module.exports = app;