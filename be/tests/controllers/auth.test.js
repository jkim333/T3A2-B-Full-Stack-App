const request = require("supertest");
const mongoose = require("mongoose");
const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const Exercise = require("../../models/exercise");

const app = require("../../app");

describe("Test the auth controller", () => {
  beforeAll((done) => {
    mongoose
      .connect(
        `mongodb://root:password@mongo:27017/${uuidv4()}?authSource=admin`
      )
      .then(() => {
        const results = [];
        Exercise.find().then((exercises) => {
          if (exercises.length === 0) {
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
                  .catch((err) => done(err));
              });
          } else {
            console.log("Mongoose connection opened.");
            done();
          }
        });
      })
      .catch((err) => done(err));
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

  describe("POST /auth/signup", () => {
    afterEach((done) => {
      mongoose.connection
        .dropCollection("users")
        .then(() => {
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    describe("when passed a username and password", () => {
      test("should respond with a 201 status code and a success message", async () => {
        const response = await request(app).post("/auth/signup").send({
          username: "username",
          password: "password",
        });
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe(
          "A new user was successfully created."
        );
      });
    });

    describe("when signing up with the same username twice", () => {
      test("should respond with a 409 status code and an error message", async () => {
        await request(app).post("/auth/signup").send({
          username: "username",
          password: "password",
        });
        const response = await request(app).post("/auth/signup").send({
          username: "username",
          password: "password",
        });
        expect(response.statusCode).toBe(409);
        expect(response.body.error).toBe(
          "A user with the username 'username' already exists."
        );
      });
    });
  });

  describe("POST /auth/login", () => {
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

    describe("when signing in with correct username and password", () => {
      test("should respond with a 200 status code and an access token", async () => {
        const response = await request(app).post("/auth/login").send({
          username: "username",
          password: "password",
        });
        expect(response.statusCode).toBe(200);
        const accessToken = response.body.accessToken;
        expect(accessToken).not.toBeUndefined();
      });
    });

    describe("when signing in with incorrect username", () => {
      test("should respond with a 401 status code and an error message", async () => {
        const response = await request(app).post("/auth/login").send({
          username: "IncorrectUsername",
          password: "password",
        });
        expect(response.statusCode).toBe(401);
        const errorMsg = response.body.error;
        expect(errorMsg).toBe("Incorrect username or password.");
      });
    });

    describe("when signing in with incorrect password", () => {
      test("should respond with a 401 status code and an error message", async () => {
        const response = await request(app).post("/auth/login").send({
          username: "username",
          password: "IncorrectPassword",
        });
        expect(response.statusCode).toBe(401);
        const errorMsg = response.body.error;
        expect(errorMsg).toBe("Incorrect username or password.");
      });
    });
  });
});
