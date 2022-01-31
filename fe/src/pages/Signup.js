import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [isMale, setIsMale] = useState(true);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(parseInt(e.target.value));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="username">Username</label>
          <input
            type="username"
            value={username}
            onChange={handleChangeUsername}
          ></input>
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
          ></input>
        </div>
        <div>
          <label for="age">Age</label>
          <input type="number" value={age} onChange={handleChangeAge}></input>
        </div>
        <div>
          <label for="height">Height</label>
          <input
            type="number"
            value={height}
            onChange={handleChangeHeight}
          ></input>
        </div>
        <div>
          <label for="weight">Weight</label>
          <input
            type="number"
            value={weight}
            onChange={handleChangeWeight}
          ></input>
        </div>
        <div>
          <label for="weight">Weight</label>
          <input
            type="number"
            value={weight}
            onChange={handleChangeWeight}
          ></input>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
