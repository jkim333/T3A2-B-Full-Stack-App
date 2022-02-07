const express = require("express");

const workoutController = require("../controllers/workout");

const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/", isAuth, workoutController.getWorkouts);
router.post("/", isAuth, workoutController.postWorkouts);

module.exports = router;
