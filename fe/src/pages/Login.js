import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
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
          <label for="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={handleChangeEmail}
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
