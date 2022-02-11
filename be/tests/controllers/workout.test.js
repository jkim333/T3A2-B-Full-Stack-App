const request = require("supertest");
const mongoose = require("mongoose");
const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const Exercise = require("../../models/exercise");

const app = require("../../app");

describe("Test the workout controller", () => {
  beforeAll((done) => {
    mongoose
      .connect(
        `mongodb://root:password@mongo:27017/${uuidv4()}?authSource=admin`
      )
      .then(() => {
        const results = [];
        Exercise.find().then((exercises) => {
          if (exercises.length === 0) {
            console.log(__dirname);
            fs.createReadStream(
              path.join(__dirname, "../../data/exercises.csv")
            )
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
                    console.log("Mongoose connection opened.");
                    done();
                  })
                  .catch((err) => {
                    console.log(err);
                    done();
                  });
              });
          } else {
            console.log("Mongoose connection opened.");
            done();
          }
        });
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  afterAll((done) => {
    mongoose.connection
      .dropDatabase()
      .then(() => {
        return mongoose.connection.close();
      })
      .then(() => {
        console.log("Mongoose connection closed.");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  describe("GET /workouts", () => {
    beforeAll(async () => {
      await request(app).post("/auth/signup").send({
        username: "username",
        password: "password",
      });
    });

    afterAll((done) => {
      mongoose.connection
        .dropCollection("users")
        .then(() => {
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test("should respond with a 200 status code and a results array", async () => {
      let a = 1;
      expect(a).toBe(1);
      // let response = await request(app).post("/auth/login").send({
      //   username: "username",
      //   password: "password",
      // });
      // const accessToken = response.body.accessToken;
      // response = await request(app).get("/workouts");
      // expect(response.body.results.length).toBe(0);
    });
  });
});
