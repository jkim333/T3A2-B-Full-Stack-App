import React from 'react';
import './App.css';
// import Login from "./pages/Login";
import { Routes, Route, Link } from "react-router-dom";
import Mainhome from './pages/Home';



function App() {
  return (
    
    <>
    <Routes>
      <Route path="/" element={<Mainhome/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </>
  
  
  );
}

export default App;
