import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Addbutton = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/search-exercise");
  }
  return (
    <>
      <button
        className="text-blue-200 bg-sky-800 opacity-75 hover:bg-sky-700 rounded-full w-16 h-16 text-4xl cursor-pointer mt-40 mb-5 mx-auto block"
        onClick={handleClick}
      >
        +
      </button>
      <p
        className="text-blue-200 text-center p-0 m-0"
        data-testid="start-workout"
      >
        Start new workout
      </p>
    </>
  );
};

const Startpage = (props) => {
  return (
    <div>
      <Navbar setToken={props.setToken} token={props.token} />
      <Addbutton />
      <Footer />
    </div>
  );
};

export default Startpage;
