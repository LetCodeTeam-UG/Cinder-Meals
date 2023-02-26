import React from "react";
import logo from "../images/logo.png";

const Login = () => {
  const formProps = [
    "Username",
    "Password",
    "Login",
    "Forgot Password?",
    "Create New Account",
  ];
  const loginBtn = <input id="login" placeholder={formProps[2]} />;
  return (
    <div className="login-page">
      <div className="login-container">
        {/* brand logo goes here */}
        <span>
          <img src={logo} alt="cinder" />
        </span>
        <form action="">
          {/* username */}
          <div className="props">
            <label htmlFor="username">{formProps[0]}</label>
            <input type="text" id="password" />
          </div>
          {/* password */}
          <div className="props">
            <label htmlFor="password">{formProps[1]}</label>
            <input type="password" id="password" />
          </div>

          {/* login-btn */}
          <div>{loginBtn}</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
