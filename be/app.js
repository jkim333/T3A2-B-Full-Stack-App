require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Exercise = require("../models/exercise");

const authRoutes = require("./routes/auth");

const app = express();
const cors = require("cors");
const csv = require("csv-parser");
const fs = require("fs");
const helmet = require("helmet");
const port = 3002;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/auth", authRoutes);

const results = [];
fs.createReadStream("./csv.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    JSON.stringify(results);
  });

app.get("/", (req, res) => {
  res.send(results);
});

mongoose
  .connect("mongodb://root:password@mongo:27017/db?authSource=admin")
  .then(() => {
    Exercise.find((exercises) => {
      if (exercises.length === 0) {
        // create exercises
      }
    });
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
