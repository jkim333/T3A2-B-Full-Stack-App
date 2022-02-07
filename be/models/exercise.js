const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  exercise: String,
  activity: String,
});

module.exports = mongoose.model("Exercise", exerciseSchema);
