import React from "react";
import Navbar from "../components/navbar";
import { Table } from "../components/table";
// import Footer from "../components/footer";

// const Addbutton = () => {
//   return (
//     <>
//       <button className="text-blue-200 bg-sky-800 opacity-75 hover:bg-sky-700 rounded-full w-16 h-16 text-4xl cursor-pointer mt-40 mb-5 mx-auto block">
//         <Link to="/search-exercise">+</Link>
//       </button>
//       <p className="text-blue-200 text-center p-0 m-0">Start new workout</p>
//     </>
//   );
// };

const Log = (props) => {
  return (
    <div className="w-screen h-full box-border  bg-gradient-to-b from-blue-900 to-sky-800">
      <Navbar setToken={props.setToken} token={props.token}/>
      <Table workouts={props.workouts} />
      
      {/* <Footer /> */}
    </div>
  );
};

export default Log;
