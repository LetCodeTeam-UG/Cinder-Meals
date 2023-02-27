import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "./navbar.css";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
      pathTwo: "/home",
    },
    {
      name: "Menu",
      path: "/menu",
    },
    {
      name: "Track Order",
      path: "/trackorder",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <nav className="cinder__navbar">
      <div className="cinder__logo">
        <Link to={navLinks[0].path}>
          {" "}
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="cinder__navbar-links">
        <li>
          <Link className="paths" to={navLinks[0].pathTwo}>
            {navLinks[0].name}
          </Link>
        </li>
        <li>
          <Link className="paths" to={navLinks[1].path}>
            {navLinks[1].name}
          </Link>
        </li>
        <li>
          <Link className="paths" to={navLinks[2].path}>
            {navLinks[2].name}
          </Link>
        </li>
        <li>
          <Link className="paths" to={navLinks[3].path}>
            {navLinks[3].name}
          </Link>
        </li>
        <span className="cart">
          <BsCart4 color="#ed7014" fontSize="2rem" />
          <span className="quantity">0</span>
        </span>
      </ul>
    </nav>
  );
};

export default Navbar;
