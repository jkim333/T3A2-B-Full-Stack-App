import { useState } from "react";
import Navbar from "../components/navbar";
import DashboardGraph from "../components/dashboard-graph";

export default function Dashboard() {
  const [measurement, setMeasurement] = useState("Max Weight");
  const [exercise, setExercise] = useState("Bench Press");
  const [time, setTime] = useState("1m");

  const handleChangeMeasurement = (e) => {
    setMeasurement(e.target.value);
  };

  const handleChangeExercise = (e) => {
    setExercise(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.dataset.time);
  };

  return (
    <div className="w-screen h-screen overflow-hidden box-border  bg-gradient-to-b from-blue-900 to-sky-800">
      <Navbar />
      <div className="flex flex-col items-center py-10">
        <h2 className="text-3xl font-extrabold text-blue-200 mb-5">
          Dashboard
        </h2>
        <div className="mb-5">
          <label
            htmlFor="exercise"
            className="block text-sm font-medium text-white mb-1"
          >
            Choose Exercise:
          </label>
          <select
            name="exercise"
            id="exercise"
            onChange={handleChangeExercise}
            value={exercise}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          >
            <option value="Bench Press">Bench Press</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="measurement"
            className="block text-sm font-medium text-white mb-1"
          >
            Choose Measurement:
          </label>
          <select
            name="measurement"
            id="measurement"
            onChange={handleChangeMeasurement}
            value={measurement}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          >
            <option value="Max Weight">Max Weight</option>
            <option value="Total Reps">Total Reps</option>
          </select>
        </div>
        <div className="mb-5">
          <button
            data-time="1m"
            onClick={handleChangeTime}
            className={
              time === "1m"
                ? "text-blue-900 text-lg rounded-sm bg-white p-2 mx-1"
                : "text-blue-200 text-lg rounded-sm bg-gradient-to-b from-sky-800 to-sky-700 opacity-75 p-2 mx-1"
            }
          >
            1m
          </button>
          <button
            data-time="3m"
            onClick={handleChangeTime}
            className={
              time === "3m"
                ? "text-blue-900 text-lg rounded-sm bg-white p-2 mx-1"
                : "text-blue-200 text-lg rounded-sm bg-gradient-to-b from-sky-800 to-sky-700 opacity-75 p-2 mx-1"
            }
          >
            3m
          </button>
          <button
            data-time="6m"
            onClick={handleChangeTime}
            className={
              time === "6m"
                ? "text-blue-900 text-lg rounded-sm bg-white p-2 mx-1"
                : "text-blue-200 text-lg rounded-sm bg-gradient-to-b from-sky-800 to-sky-700 opacity-75 p-2 mx-1"
            }
          >
            6m
          </button>
          <button
            data-time="1y"
            onClick={handleChangeTime}
            className={
              time === "1y"
                ? "text-blue-900 text-lg rounded-sm bg-white p-2 mx-1"
                : "text-blue-200 text-lg rounded-sm bg-gradient-to-b from-sky-800 to-sky-700 opacity-75 p-2 mx-1"
            }
          >
            1y
          </button>
          <button
            data-time="all"
            onClick={handleChangeTime}
            className={
              time === "all"
                ? "text-blue-900 text-lg rounded-sm bg-white p-2 mx-1"
                : "text-blue-200 text-lg rounded-sm bg-gradient-to-b from-sky-800 to-sky-700 opacity-75 p-2 mx-1"
            }
          >
            all
          </button>
        </div>
      </div>
      <DashboardGraph
        title={`${exercise} (${measurement})`}
        exercise={exercise}
        time={time}
      />
    </div>
  );
}
