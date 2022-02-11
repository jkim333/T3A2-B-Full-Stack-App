import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

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

const Startpage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden box-border  bg-gradient-to-b from-blue-900 to-sky-800">
      <Navbar />

      {/* <img src="https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" width={50} height={50} /> */}
      <Addbutton />
      <Footer />
    </div>
  );
};

export default Startpage;
