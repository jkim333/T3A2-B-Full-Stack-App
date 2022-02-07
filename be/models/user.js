const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  workouts: [
    {
      exercise: {
        id: { type: mongoose.Schema.Types.ObjectId, ref: "Exercise" },
        exercise: String,
        activity: String,
      },
      date: Date,
      reps: Number,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
