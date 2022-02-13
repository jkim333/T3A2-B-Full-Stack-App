import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-5 col:auto text-base text-center mt-1 text-blue-200 ">
      <div>No.</div>
      <div>Exercise</div>
      <div>Activity</div>
      <div>Weights(kgs)</div>
      <div>Reps</div>
    </div>
  );
};

const Row = (props) => {
  return (
    <div className="grid grid-cols-5 col:auto text-base text-center m-1 text-blue-200 rounded-sm mb-1 bg-gradient-to-b from-sky-800 to-sky-700 opacity-75 ">
      <div>{props.index + 1}</div>
      <div>{props.exercise}</div>
      <div>{props.activity}</div>
      <div>{props.weight}</div>
      <div>{props.reps}</div>
    </div>
  );
};

const Table = (props) => {
  return (
    <div className=" p-0.5 rounded w-11/12 mx-auto  mt-5 border border-sky-900 ">
      <p className="text-blue-200 text-center text-xl border-b border-sky-800 pt-10">
        Workout
      </p>
      <Header />
      {props.workouts.map((obj, index) => (
        <div key={obj._id}>
          <Row
            reps={obj.reps}
            weight={obj.weight}
            index={index}
            activity={obj.exercise.activity}
            exercise={obj.exercise.exercise}
          />
        </div>
      ))}
    </div>
  );
};

export { Row, Header, Table };
