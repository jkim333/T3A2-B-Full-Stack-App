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

    describe("when passed a valid token", () => {
      test("should respond with a 200 status code and an empty results array", async () => {
        let response = await request(app).post("/auth/login").send({
          username: "username",
          password: "password",
        });
        const accessToken = response.body.accessToken;
        response = await request(app)
          .get("/workouts")
          .set("Authorization", "Bearer " + accessToken);
        expect(response.statusCode).toBe(200);
        expect(response.body.results.length).toBe(0);
      });
    });

    describe("when passed no token", () => {
      test("should respond with a 401 status and an error message without token", async () => {
        const response = await request(app).get("/workouts");
        expect(response.statusCode).toBe(401);
        expect(response.body.error).toBe("Unauthorised request.");
      });
    });

    describe("when passed an invalid token", () => {
      test("should respond with a 403 status and an error message with invalid token", async () => {
        const accessToken = "invalid";
        const response = await request(app)
          .get("/workouts")
          .set("Authorization", "Bearer " + accessToken);
        expect(response.statusCode).toBe(403);
        expect(response.body.error).toBe("Invalid token.");
      });
    });
  });

  describe("POST /workouts", () => {
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

    describe("when passed a valid token", () => {
      test("should respond with a 201 status code and a results array", async () => {
        let response = await request(app).post("/auth/login").send({
          username: "username",
          password: "password",
        });
        const accessToken = response.body.accessToken;
        response = await request(app)
          .post("/workouts")
          .send({
            exerciseId: "62007db821bf6cdd9e795232",
            exercise: "Abs",
            activity: "Crunch",
            reps: 10,
            weight: 60,
          })
          .set("Authorization", "Bearer " + accessToken);
        expect(response.statusCode).toBe(201);
        expect(response.body.results.length).toBe(1);
      });
    });

    describe("when passed no token", () => {
      test("should respond with a 401 status and an error message", async () => {
        const response = await request(app).post("/workouts").send({
          exerciseId: "62007db821bf6cdd9e795232",
          exercise: "Abs",
          activity: "Crunch",
          reps: 10,
          weight: 60,
        });
        expect(response.statusCode).toBe(401);
        expect(response.body.error).toBe("Unauthorised request.");
      });
    });

    describe("when passed an invalid token", () => {
      test("should respond with a 403 status and an error message", async () => {
        const accessToken = "invalid";
        const response = await request(app)
          .post("/workouts")
          .send({
            exerciseId: "62007db821bf6cdd9e795232",
            exercise: "Abs",
            activity: "Crunch",
            reps: 10,
            weight: 60,
          })
          .set("Authorization", "Bearer " + accessToken);
        expect(response.statusCode).toBe(403);
        expect(response.body.error).toBe("Invalid token.");
      });
    });
  });
});
