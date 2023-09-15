import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    const token = data.token;

    // Store the token somewhere (e.g. local storage)
    localStorage.setItem("token", token);

  };

  const loginBtn = (
    <Link className="to-login" to="/home">
      <input className="login" type="submit" value="Login" />
    </Link>
  );
  return (
    <div className="login-page">
      <div className="login-container">
        {/* brand logo goes here */}
        <span className="logo">
          <img src={logo} alt="cinder" />
        </span>
        <form action="">
          {/* username */}
          <div className="props">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value="Okantey"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* password */}
          <div className="props">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value="okantey123"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* login-btn */}
          <div className="props">{loginBtn}</div>
          {/* password reset */}
          <div className="reset">Forgot Password?</div>

          {/* create new account */}
          <div className="new-user">
            New to cinder meals?{" "}
            <span>
              <Link className="new" to="/signup">
                Create New Account
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
