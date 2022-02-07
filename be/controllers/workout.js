const User = require("../models/user");

module.exports.getWorkouts = (req, res, next) => {
  const userId = req.user.userId;
  User.findOne({ _id: userId })
    .then((user) => {
      if (user) {
        return res.json({ results: user.workouts });
      }
      return res.status(404).json({ error: "The user does not exist." });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ error: "Something went wrong with the server." });
    });
};

module.exports.postWorkouts = (req, res, next) => {
  const userId = req.user.userId;
  const exerciseId = req.body.exerciseId;
  const exercise = req.body.exercise;
  const activity = req.body.activity;
  const reps = req.body.reps;

  User.findOne({ _id: userId })
    .then((user) => {
      if (user) {
        user.workouts = [
          ...user.workouts,
          {
            exercise: { id: exerciseId, exercise, activity },
            date: new Date(),
            reps: reps,
          },
        ];
        return user.save().then((user) => {
          return res.status(201).json({ results: user.workouts });
        });
      }
      return res.status(404).json({ error: "The user does not exist." });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ error: "Something went wrong with the server." });
    });
};
