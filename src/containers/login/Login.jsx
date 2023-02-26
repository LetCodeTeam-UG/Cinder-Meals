import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./login.css";

const Login = () => {
  const formProps = [
    "Email",
    "Password",
    "Login",
    "Forgot Password?",
    "Create New Account",
  ];
  const loginBtn = (
    <input className="login" type="submit" value={formProps[2]} />
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
            <label htmlFor="email">{formProps[0]}</label>
            <input type="email" id="email" />
          </div>
          {/* password */}
          <div className="props">
            <label htmlFor="password">{formProps[1]}</label>
            <input type="password" id="password" />
          </div>

          {/* login-btn */}
          <div className="props">{loginBtn}</div>
          {/* password reset */}
          <div className="reset">{formProps[3]}</div>

          {/* create new account */}
          <div className="new-user">
            New to cinder?{" "}
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
