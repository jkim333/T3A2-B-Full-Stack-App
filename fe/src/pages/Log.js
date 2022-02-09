import React from "react";
import Input from "../components/loginput";
import Navbar from "../components/navbar";

const Log = () => {
  return (
    <div className="w-screen h-screen overflow-hidden box-border  bg-gradient-to-b from-blue-900 to-sky-800">
      <Navbar />
      <Input />
    </div>
  );
};
export default Log;
