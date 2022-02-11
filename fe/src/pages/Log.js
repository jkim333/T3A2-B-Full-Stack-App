import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { Table } from "../components/table";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

const Addbutton = () => {
  return (
    <>
      <button className="text-blue-200 bg-sky-800 opacity-75 hover:bg-sky-700 rounded-full w-16 h-16 text-4xl cursor-pointer mt-40 mb-5 mx-auto block">
        <Link to="/search-exercise">+</Link>
      </button>
      <p className="text-blue-200 text-center p-0 m-0">Start new workout</p>
    </>
  );
};

const Log = (props) => {
  const [workouts, setWorkout] = useState([]);

  useEffect(() => {
    fetch("https://secret-forest-05738.herokuapp.com/workouts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${props.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setWorkout(data))
      .catch((err) => {
        alert(err);
        return;
      });
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden box-border  bg-gradient-to-b from-blue-900 to-sky-800">
      <Navbar />
      <Table workouts={workouts} />
      <Addbutton />
      <Footer />
    </div>
  );
};

export default Log;
