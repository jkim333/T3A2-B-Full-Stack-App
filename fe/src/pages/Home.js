import React from "react";
import Home from "../components/home";

const Mainhome = (props) => {
  return <Home setToken={props.setToken} />;
};

export default Mainhome;
