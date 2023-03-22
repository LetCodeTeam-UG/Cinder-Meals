import React, { useState } from "react";
import "../login/login.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // perform form validation here
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // make API call to post the data
    const response = await fetch("http://127.0.0.1:8000/api/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // redirect to the login page
      window.location.href = "/auth/login";
    } else {
      const errorData = await response.json();
      setError(errorData.message);
    }
  };
  return (
    <div className="login-page">
      <div className="login-container">
        {/* brand logo goes here */}
        <span className="logo">
          <img src={logo} alt="cinder" />
        </span>
        <form onSubmit={handleSubmit}>
          {error && <p style={{
            color: "red",
          }}>{error}</p>}
             <div className="props">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="props">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* password */}
          <div className="props">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="props">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="props">
            <input className="login" type="submit" value="Register" />
          </div>
        </form>
        <div className="new-user">
          Already Have An Account?
          <span>
            <Link className="new" to="/auth/login">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
