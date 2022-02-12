import React from "react";
import ExerciseDisplay from "../components/exercise";
import Footer from "../components/footer";

const Search = (props) => {
  return (
    <div>
      <ExerciseDisplay
        token={props.token}
        setToken ={props.setToken}
        userId={props.userId}
        workoutDisplay={props.workoutDisplay}
      />
      <Footer />
    </div>
  );
};

export default Search;
