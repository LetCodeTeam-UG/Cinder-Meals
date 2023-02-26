import React from "react";
import logo from "../../images/logo.png"
import './navbar.css'


const Navbar = () => {
  return <div className="cinder__navbar">
    <div className="cinder__navbar-links">
      <div className="cinder__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="cinder__navbar-links_container">
        <p><a href="#menu">Menu</a></p>
        <p><a href="#trackorder">Track Order</a></p>
        <p><a href="#contact">Contact</a></p>
      </div>
    </div>
    <div className="cinder__navbar-login">
        <p>Login</p>
        <button type="button" >Sign Up</button>
      </div>
  </div>;
};

export default Navbar;
