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

  return (
    <>
      <Routes>
        <Route path="/" element={<Mainhome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/start" element={<Startpage />} />
        <Route path="/login" element={<Login token={token} setToken={setToken} />} />
        <Route path="/log-entry" element={<Log />} />
        <Route path="/search-exercise" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
