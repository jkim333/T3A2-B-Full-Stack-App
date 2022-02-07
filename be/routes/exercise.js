const express = require("express");

const exerciseController = require("../controllers/exercise");

// const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/", exerciseController.getExercises);

module.exports = router;
