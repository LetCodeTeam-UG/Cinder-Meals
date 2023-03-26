import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please enter a username and password.");
      return;
    }
    const loginData = { email, password };
    // make a POST request to the API endpoint
    fetch("http://127.0.0.1:8000/api/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        // handle the response from the API endpoint
        if (data.token) {
          // store the token in local storage or a cookie
          localStorage.setItem("token", data.token);
          setTimeout(() => {
            window.location.href = "/home";
          }, 2000);
          setSuccessMessage("Login successful");

          // redirect to the home page or set a state to display home page
        } else {
          setErrorMessage("Invalid username or password.");
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("An error occurred. Please try again.");
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* brand logo goes here */}
        <span className="logo">
          <img src={logo} alt="cinder" />
        </span>
        <form onSubmit={handleSubmit}>
          {/* username */}
          {errorMessage && <p>{errorMessage}</p>}
          <div className="props">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* password */}
          <div className="props">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="props">
            <input className="login" type="submit" value="Login" />
          </div>
          {successMessage && (
            <p style={{ fontWeight: "700" }}>{successMessage}</p>
          )}
        </form>
        <div className="reset">Forgot Password?</div>
        <div className="new-user">
          New to cinder meals?{" "}
          <span>
            <Link className="new" to="/auth/register">
              Create New Account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
