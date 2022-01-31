import { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="username"
            value={username}
            onChange={handleChangeUsername}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
          ></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" value={age} onChange={handleChangeAge}></input>
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="number"
            value={height}
            onChange={handleChangeHeight}
          ></input>
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            value={weight}
            onChange={handleChangeWeight}
          ></input>
        </div>
        <div>
          <label htmlFor="gender" value={gender}>
            Gender
          </label>
          <select name="gender" id="gender" onChange={handleChangeGender}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
