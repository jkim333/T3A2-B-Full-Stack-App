import React, {useState}from "react";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Mainhome from "./pages/Home";
import Search from "./pages/Exercise";
import Log from "./pages/Log";
import Startpage from "./pages/Start";



function App() {
  const [token, setToken] = useState(null);
  const [workouts, setWorkout] = useState([]);
  function handleToken(token){
      setToken(token)
  }


  function workoutDisplay (data){
      setWorkout(data)
  }
  return (
  
      <Routes>
        <Route path="/" element={<Mainhome setToken={setToken} />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/start" element={<Startpage setToken={setToken} token={token}/>} />
        <Route path="/search-exercise" element={<Search  token={token} workoutDisplay={workoutDisplay} setToken={setToken} /> } />
        <Route path="/log-entry" element={<Log token={token} workouts={workouts} setToken={setToken} />} />
        <Route path="/login" element={<Login token={token} handleToken={handleToken}  />} />
    
      </Routes>
  );
}

export default App;
