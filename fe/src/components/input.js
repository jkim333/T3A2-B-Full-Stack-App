import React, { useState } from "react";
import { Link } from "react-router-dom";




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

  function clearentry() {
    props.handleWeightInput("");
    props.handleRepsInput("");
  }

  let form_object = {
    exerciseId: props.id,
    exercise: props.exercise,
    activity: props.activity,
    weights: props.inputweight,
    reps: props.inputreps,
  };


  async function handleSubmit(e) {
   
    e.preventDefault();
   
    await fetch("http://localhost:3002/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWZkYmQxYTMwYTNiMjk4MDg2NTk2NzEiLCJpYXQiOjE2NDQwMjA5MDd9.cIz7VcRv-Tj48dAMswd5kOn63P-L5Kwqwx9ULJZabrw",
      },
      body: JSON.stringify(form_object),
    }).catch((err) => {
      alert(err);
      return;
    });

    try {
      let input_res = await fetch("http://localhost:3002/workouts");
      let data = await input_res.json();
      console.log(data)
    } catch (err) {
      alert(err);
    }

  }



  return (
    <div className="flex flex-row basis-1/3 mt-5">
        <button
        className="shadow-xl shadow-sky-900 text-blue-200 hover:bg-sky-700 bg-sky-800 opacity-85 rounded-sm w-20 h-14 text-2xl cursor-pointer my-6 mx-auto px-2"  
        type="submit" 
        onClick={handleSubmit}><Link to="/log-entry">Save</Link>
        </button>
       <button
        onClick={clearentry}
        className="shadow-xl shadow-sky-900 hover:bg-sky-700 text-blue-200 bg-sky-800 opacity-85 rounded-sm w-20 h-14 text-2xl cursor-pointer my-6 mx-auto px-2"
        >Clear
       </button>
     
        {/* // <Table activity={props.activity} inputreps={props.inputreps} inputweight={props.inputweight}/> */}

    </div>
  );
};




const Input = ({ exercise, activity, id }) => {
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
        // handleSave={handleSave}
        // save={save}
      />
    </>
  );
};

export default Input;
