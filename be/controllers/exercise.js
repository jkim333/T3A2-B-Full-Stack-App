const Exercise = require("../models/exercise");

module.exports.getExercises = (req, res, next) => {
  Exercise.find()
    .then((exercises) => {
      return res.json({ results: exercises });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ error: "Something went wrong with the server." });
    });
};
