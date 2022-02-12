import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WeightEntry = (props) => {
  function handleIncrement() {
    return props.inputweight
      ? props.handleWeightInput(parseInt(props.inputweight) + 1)
      : null;
  }

  function handleDecrement() {
    return props.inputweight && props.inputweight > 0
      ? props.handleWeightInput(parseInt(props.inputweight) - 1)
      : null;
  }

  function handleChange(e) {
    props.handleWeightInput(parseInt(e.target.value));
  }

  return (
    <>
      <p className="text-blue-200 text-center text-xl border-b border-sky-800 pt-10">
        {props.title}
      </p>
      <div className="grid grid-cols-3 justify-items-center items-center">
        <button
          onClick={handleDecrement}
          className="mr-1 shadow-xl shadow-sky-900 hover:bg-sky-700 text-blue-200 bg-sky-800 opacity-90 rounded-full w-12 h-12 text-4xl cursor-pointer my-8 mx-auto"
        >
          {" "}
          -{" "}
        </button>
        <input
          onChange={handleChange}
          value={props.inputweight}
          className="w-20 text-center focus:outline-none border-b border-blue-200  bg-transparent placeholder:italic placeholder:text-slate-400 text-blue-200"
          type="number"
        />
        <button
          onClick={handleIncrement}
          className="ml-1 shadow-xl shadow-sky-900 hover:bg-sky-700 text-blue-200 bg-sky-800 opacity-90 rounded-full w-12 h-12 text-3xl cursor-pointer my-8 mx-auto"
        >
          +
        </button>
      </div>
    </>
  );
};

const RepsEntry = (props) => {
  function handleIncrement() {
    props.handleRepsInput(parseInt(props.inputreps) + 1);
  }
  function handleDecrement() {
    props.handleRepsInput(parseInt(props.inputreps) - 1);
  }

  function handleChange(e) {
    props.handleRepsInput(parseInt(e.target.value));
  }

  return (
    <>
      <p className="text-blue-200 text-center text-xl border-b border-sky-800 pt-10">
        {props.title}
      </p>
      <div className="grid grid-cols-3 justify-items-center items-center">
        <button
          onClick={handleDecrement}
          className="mr-1 shadow-xl shadow-sky-900 text-blue-200 hover:bg-sky-700 bg-sky-800 opacity-90 rounded-full w-12 h-12 text-4xl cursor-pointer my-8 mx-auto"
        >
          {" "}
          -{" "}
        </button>
        <input
          onChange={handleChange}
          value={props.inputreps}
          className="w-20 text-center focus:outline-none border-b border-blue-200  bg-transparent placeholder:italic placeholder:text-slate-400 text-blue-200"
          type="number"
          step="10"
        />
        <button
          onClick={handleIncrement}
          className="ml-1 shadow-xl shadow-sky-900 text-blue-200 hover:bg-sky-700 bg-sky-800 opacity-90 rounded-full w-12 h-12 text-3xl cursor-pointer my-8 mx-auto"
        >
          +
        </button>
      </div>
    </>
  );
};

const SaveclearButton = (props) => {
  const navigate = useNavigate();
  function clearentry() {
    props.handleWeightInput("");
    props.handleRepsInput("");
  }

  let post_object = {
    exerciseId: props.id,
    exercise: props.exercise,
    activity: props.activity,
    weight: props.inputweight,
    reps: props.inputreps,
  };
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://secret-forest-05738.herokuapp.com/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${props.token}`,
      },
      body: JSON.stringify(post_object),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        alert(err);
        return;
      });

    fetch("https://secret-forest-05738.herokuapp.com/workouts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${props.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => props.workoutDisplay(data.results))
      .catch((err) => {
        alert(err);
        return;
      });

    navigate("/log-entry");
  }

  return (
    <div className="flex flex-row basis-1/2 mt-5">
      <form className="flex flex-row basis-1/2 " onSubmit={handleSubmit}>
        <input
          data-testid="save-button"
          className="shadow-xl shadow-sky-900 text-blue-200 hover:bg-sky-700 bg-sky-800 opacity-85 rounded-sm w-20 h-14 text-2xl cursor-pointer my-6 mx-auto px-2"
          type="submit"
          value="Save"
        />
      </form>
      <button
        onClick={clearentry}
        className="shadow-xl shadow-sky-900 hover:bg-sky-700 text-blue-200 bg-sky-800 opacity-85 rounded-sm w-20 h-14 text-2xl cursor-pointer my-6 mx-auto px-2"
      >
        Clear
      </button>
    </div>
  );
};

const Input = ({ exercise, activity, id, token, workoutDisplay }) => {
  const [inputweight, handleWeightInput] = useState("");
  const [inputreps, handleRepsInput] = useState("");

  return (
    <>
      <WeightEntry
        title="Weights"
        inputweight={inputweight}
        handleWeightInput={handleWeightInput}
      />
      <RepsEntry
        title="Reps"
        inputreps={inputreps}
        handleRepsInput={handleRepsInput}
      />
      <SaveclearButton
        handleWeightInput={handleWeightInput}
        handleRepsInput={handleRepsInput}
        inputweight={inputweight}
        inputreps={inputreps}
        exercise={exercise}
        activity={activity}
        id={id}
        token={token}
        workoutDisplay={workoutDisplay}
      />
    </>
  );
};

export default Input;
