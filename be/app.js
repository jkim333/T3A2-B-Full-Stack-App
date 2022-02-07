require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const csv = require("csv-parser");
const fs = require("fs");
const helmet = require("helmet");

const Exercise = require("./models/exercise");

const authRoutes = require("./routes/auth");
const exerciseroutes = require("./routes/exercise");

const app = express();

const port = 3002;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/exercises", exerciseroutes);

mongoose
  .connect("mongodb://root:password@mongo:27017/db?authSource=admin")
  .then(() => {
    const results = [];
    Exercise.find().then((exercises) => {
      if (exercises.length === 0) {
        fs.createReadStream("./data/exercises.csv")
          .pipe(csv())
          .on("data", (data) => {
            const exercise = new Exercise({
              exercise: data.Exercise,
              activity: data.Activity,
            });
            results.push(exercise);
          })
          .on("end", () => {
            Promise.all(results.map((result) => result.save()))
              .then(() => {
                app.listen(port, () => {
                  console.log(`Listening on port ${port}`);
                });
              })
              .catch((err) => console.log(err));
          });
      } else {
        app.listen(port, () => {
          console.log(`Listening on port ${port}`);
        });
      }
    });
  })
  .catch((err) => console.log(err));
