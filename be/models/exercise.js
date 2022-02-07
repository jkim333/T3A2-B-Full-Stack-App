const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  exerciseCategory: String,
  exercises: [{ String }],
});

module.exports = mongoose.model("Exercise", exerciseSchema);
