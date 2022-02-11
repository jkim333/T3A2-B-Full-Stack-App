require("dotenv").config();
const express = require("express");

const cors = require("cors");

const helmet = require("helmet");

const authRoutes = require("./routes/auth");
const exerciseRoutes = require("./routes/exercise");
const workoutRoutes = require("./routes/workout");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/exercises", exerciseRoutes);
app.use("/workouts", workoutRoutes);

module.exports = app;
