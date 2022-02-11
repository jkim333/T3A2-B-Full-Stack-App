const mongoose = require("mongoose");
const csv = require("csv-parser");
const fs = require("fs");

const Exercise = require("./models/exercise");

const app = require("./app");

const port = process.env.PORT || 3002;

let connection;

if (process.env.DEBUG === 'true') {
  connection = mongoose.connect("mongodb://root:password@mongo:27017/db?authSource=admin")
} else {
  connection = mongoose.connect(`mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0.a4ct4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
}

connection.then(() => {
    const results = [];
    Exercise.find().then((exercises) => {
      if (exercises.length === 0) {
        fs.createReadStream("./data/exercises.csv")
          .pipe(csv())
          .on("data", (data) => {
            const exercise = new Exercise({
              exercise: data.exercise,
              activity: data.activity,
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
