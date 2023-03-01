import React from "react";
import "../login/login.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const formProps = [
    "Username",
    "Email",
    "Password",
    "SignUp",
    "Forgot Password?",
    "Create New Account",
    "Login",
  ];
  const loginBtn = (
    <Link className="to-login" to="/login">
      <input className="login" type="submit" value={formProps[5]} />
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
            <label htmlFor="username">{formProps[0]}</label>
            <input type="text" id="username" />
          </div>

          <div className="props">
            <label htmlFor="email">{formProps[1]}</label>
            <input type="email" id="email" />
          </div>

          {/* password */}
          <div className="props">
            <label htmlFor="password">{formProps[2]}</label>
            <input type="password" id="password" />
          </div>

          {/* login-btn */}
          <div className="props">{loginBtn}</div>
          {/* password reset */}
          {/* <div className="reset">{formProps[3]}</div> */}

          {/* create new account */}
          <div className="new-user">
            Already Have An Account?{" "}
            <span>
              <Link className="new" to="/login">
                {formProps[6]}
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
