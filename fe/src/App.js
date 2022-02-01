
import React from 'react';
import './App.css';
// import Login from "./pages/Login";
import { Routes, Route, Link } from "react-router-dom";
import Mainhome from './pages/Home';
import Log from './pages/Log';



function App() {
  return (
    
    <>
    <Routes>
      <Route path="/" element={<Mainhome/>} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/log-entry" element={<Log />} />
    </Routes>
  </>
  
  );
}

export default App;
