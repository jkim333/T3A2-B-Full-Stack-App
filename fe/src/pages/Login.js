import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let form_object = {
      username: username,
      password: password,
    };
    await fetch("http://localhost:3002/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form_object),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        alert(err);
        return;
      });
  }

  return (
    <div className="w-screen h-screen overflow-hidden box-border  bg-gradient-to-b from-blue-900 to-sky-800">
      <Navbar />
      <h1 className="text-blue-200 text-center mt-5 text-lg">Don't have an account! <Link className="bg-sky-800 rounded-lg p-3" to="/signup">Sign up </Link> here!</h1>
      <div className="flex flex-col items-center py-10">
        <h2 className="text-3xl font-extrabold text-blue-200">Log In</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white py-8 px-10 shadow rounded-lg my-8 max-w-md w-full"
        >
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={handleChangeUsername}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            ></input>
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={handleChangePassword}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            ></input>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-b from-blue-900 to-sky-800 focus:outline-none transition duration-150 ease-in-out cursor-pointer"
          >
           <Link to='/'> Log In</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
