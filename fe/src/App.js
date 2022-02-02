import React from 'react';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route, Link } from "react-router-dom";
import Mainhome from './pages/Home';
import Search from './pages/Exercise';
import Log from './pages/Log';


function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Mainhome/>} />
      <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} /> 
       <Route path="/search-exercise" element={<Search />} />
       <Route path="/log-entry" element={<Log />} />
    </Routes>
  </>
  

  );
}

export default App;
