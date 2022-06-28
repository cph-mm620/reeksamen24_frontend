import React from "react";
import { useState } from "react";
import "../styles/signup.css";

const SignUp = ({ onAdd }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      alert("Please enter a user name");
      return;
    }
    if (!password) {
      alert("Please enter a password");
      return;
    }
    if (password !== password2) {
      alert("Your passwords do not match");
      return;
    }

    onAdd({ username, password });

    setUserName("");
    setPassword("");
    setPassword2("");
  };

  return (
    <div className="signup">
      <h2>Sign up</h2>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>User name</label>
          <input
            className="formInput"
            type="text"
            placeholder="User name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            className="formInput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>Repeat password</label>
          <input
            className="formInput"
            type="password"
            placeholder="Repeat password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          ></input>
        </div>
        <input type="submit" value="Sign up" className="myButton" />
      </form>
    </div>
  );
};

export default SignUp;
