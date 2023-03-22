import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // perform form validation here
    if (!email || !password) {
      setErrorMessage("Please enter a username and password.");
      return;
    }

    // create an object containing the form data
    const loginData = { email, password };

    // make a POST request to the API endpoint
    fetch("https://example.com/login", {
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
          window.location.href = "/home";
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
        </form>
        <div className="reset">Forgot Password?</div>
        <div className="new-user">
          New to cinder meals?{" "}
          <span>
            <Link className="new" to="/signup">
              Create New Account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
