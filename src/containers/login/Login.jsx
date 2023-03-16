import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(username);
  console.log(password);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("127.0.0.1:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    const token = data.token;

    // Store the token somewhere (e.g. local storage)
    localStorage.setItem("token", token);
  };

  const formProps = [
    "Username",
    "Password",
    "Login",
    "Forgot Password?",
    "Create New Account",
  ];

  const loginBtn = (
    <Link className="to-login" to="/home">
      <input className="login" type="submit" value={formProps[2]} />
    </Link>
  );
  return (
    <div className="login-page">
      <div className="login-container">
        {/* brand logo goes here */}
        <span className="logo">
          <img src={logo} alt="cinder" />
        </span>
        <form action="" onSubmit={handleSubmit}>
          {/* username */}
          <div className="props">
            <label htmlFor="email">{formProps[0]}</label>
            <input
              type="email"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* password */}
          <div className="props">
            <label htmlFor="password">{formProps[1]}</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* login-btn */}
          <div className="props">{loginBtn}</div>
          {/* password reset */}
          <div className="reset">{formProps[3]}</div>

          {/* create new account */}
          <div className="new-user">
            New to cinder meals?{" "}
            <span>
              <Link className="new" to="/signup">
                {formProps[4]}
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
