import { useState } from "react";
import Navbar from "../components/navbar";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("male");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(parseInt(e.target.value));
  };

  const handleChangeHeight = (e) => {
    setHeight(parseInt(e.target.value));
  };

  const handleChangeWeight = (e) => {
    setWeight(parseInt(e.target.value));
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(age);
    console.log(height);
    console.log(weight);
    console.log(gender);
  };

  return (
    <div className="w-screen h-screen overflow-hidden box-border  bg-gradient-to-b from-blue-900 to-sky-800">
      <Navbar />
      <div className="flex flex-col items-center py-10">
        <h2 className="text-3xl font-extrabold text-blue-200">Sign Up</h2>
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
              type="username"
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
          <div className="mb-5">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Age
            </label>
            <input
              type="number"
              value={age}
              onChange={handleChangeAge}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            ></input>
          </div>
          <div className="mb-5">
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Height
            </label>
            <input
              type="number"
              value={height}
              onChange={handleChangeHeight}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            ></input>
          </div>
          <div className="mb-5">
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Weight
            </label>
            <input
              type="number"
              value={weight}
              onChange={handleChangeWeight}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            ></input>
          </div>
          <div className="mb-5">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              onChange={handleChangeGender}
              value={gender}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-b from-blue-900 to-sky-800 focus:outline-none transition duration-150 ease-in-out cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
