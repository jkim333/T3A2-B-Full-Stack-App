import { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <div className="w-screen h-screen overflow-hidden box-border  bg-gradient-to-b from-blue-900 to-sky-800">
      <Navbar />
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
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}