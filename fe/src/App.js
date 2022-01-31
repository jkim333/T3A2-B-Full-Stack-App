import "./App.css";
// import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
