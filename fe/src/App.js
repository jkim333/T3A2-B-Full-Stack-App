import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Mainhome from "./pages/Home";
import Search from "./pages/Exercise";
import Log from './pages/Log';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Mainhome />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/log-entry" element={<Log/>} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/search-exercise" element={<Search  />}/>
        {/* <Route path="/calendar" element={<CalendarDisplay />} /> */}
      </Routes>
    </>
  );
}

export default App;
