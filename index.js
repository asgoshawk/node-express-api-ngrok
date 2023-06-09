"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app
  .route("/")
  .get((req, res) => {
    console.log("Here is the request body in GET:");
    console.log(req.body);
    res.status(200).send("GET method!");
  })
  .post((req, res) => {
    console.log("Here is the request body in POST:");
    console.log(req.body);
    res.status(200).send("POST method!");
  });

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
