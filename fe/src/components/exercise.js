import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Input from "./input";

const ExerciseType = ({ type, exercises, handleBtn, btn }) => {
  const [allexercises, setActivities] = useState([]);
  const [activityBtn, handleActivity] = useState(false);
  const [id, handleActivityid] = useState("");
  const [exercise, setExercise] = useState("");
  const [activity, setActivity] = useState("");

  function handleExercisevalue(e) {
    e.preventDefault();
    const new_exercises = exercises.filter(
      (exercise) => exercise.exercise === type
    );
    setActivities(new_exercises);
    handleBtn(true);
    return setExercise(e.target.value);
  }

  function handleActivityvalue(e) {
    e.preventDefault();
    handleActivity(true);
    setActivity(e.target.value);
    allexercises.map((element) => {
      if (element.activity === e.target.value) {
        handleActivityid(element._id);
      }
      return id;
    });
  }

  if (activityBtn) {
    return <Input exercise={exercise} activity={activity} id={id}/>;
  }

  return (
    <div>
      <input
        onClick={handleExercisevalue}
        value={type}
        type="button"
        className="text-center mt-2  mx-auto w-full text-blue-200 text-lg px-2 rounded-sm border-b  border-sky-800 opacity-82 cursor-pointer block hover:bg-sky-800 active:bg-sky-800 focus:outline-none "
        style={{ display: type && !btn ? "block" : "none" }}
      />
      {allexercises.map((exercise) => (
        <input
          key={exercise._id}
          value={exercise.activity}
          onClick={handleActivityvalue}
          type="submit"
          className="text-center mt-2 list-none mx-auto w-full text-blue-200 text-base px-2 rounded-sm  border-b border-sky-800 opacity-82 cursor-pointer block hover:bg-sky-900 active:bg-sky-800 focus:outline-none"
          style={{ display: type && btn ? "block" : "none" }}
        />
      ))}
    </div>
  );
};

const TitleBar = () => {
  return (
    <p className="text-blue-200 text-2xl border-b border-blue-300  mt-5 text-center">
       Exercise Log
    </p>
  );
};

const ExerciseDisplay = () => {
  const [exercises, handleExercises] = useState([]);
  const [exerciseArray, handleData] = useState([]);
  const [btn, handleBtn] = useState(false);


  useEffect(() => {
    async function fetchData() {
      try {
        let exercise_response = await fetch("https://secret-forest-05738.herokuapp.com/exercises");
        let data = await exercise_response.json();
        handleExercises(data.results);  //state change
        handledata(data.results) //calls function
      
      } catch (err) {
        alert(err);
      }
    }
    fetchData();
  }, []);

  
function handledata(exercises){
      
  const new_array = []
  exercises.map((obj)=> new_array.push(obj.exercise))
  
 const no_duplicate_exercises = new_array.filter((element,index)=> new_array.indexOf(element) === index)
  return handleData(no_duplicate_exercises) 
}


  return (
    <div className="w-screen h-screen overflow-hidden box-border  bg-gradient-to-b from-blue-900 to-sky-800">
      <Navbar />
      <TitleBar />
      {exerciseArray.map((type, index) => (
        <div key={index}>
          <ExerciseType
            type={type}
            exercises={exercises}
            btn={btn}
            handleBtn={handleBtn}
          />
        </div>
      ))}
    </div>
  );
};

export default ExerciseDisplay;
