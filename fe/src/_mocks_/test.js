function fetch_data() {
  return fetch("https://secret-forest-05738.herokuapp.com/exercises");
}

function fetch_workout() {
  return fetch("https://secret-forest-05738.herokuapp.com/workouts");
}
const mock_obj = {
  exerciseId: 1,
  exercise: "Abs",
  activity: "Crunch",
  weights: 10,
  reps: 12,
};

module.exports = {
  fetch_data,
  mock_obj: mock_obj,
  fetch_workout,
};
