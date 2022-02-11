import React from "react";
import ExerciseDisplay from "../components/exercise";
import Footer from "../components/footer";

const Search = (props) => {
  return (
    <div>
      <ExerciseDisplay token={props.token} />
      <Footer />
    </div>
  );
};

export default Search;
