import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

const Home = (props) => {
  return (
    <div className="w-screen h-screen overflow-hidden box-border  bg-gradient-to-b from-blue-900 to-sky-800">
      <Navbar setToken={props.setToken} />
      <div className="flex flex-row justify-center">
        <Link
          className="bg-sky-800 text-blue-200 rounded-full px-16 py-2  mt-20 my-auto "
          to="/login"
        >
          Login
        </Link>
        <Link
          className="bg-sky-800 text-blue-200 rounded-full px-14 py-2  mt-20 ml-5 my-auto "
          to="/signup"
        >
          Sign up
        </Link>
      </div>
      {/* <img src="https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" width={50} height={50} /> */}
      <Footer />
    </div>
  );
};

export default Home;
