import React, {useState} from "react";
import logo from "../../images/logo.png";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "./navbar.css";

const Menu = () => {
  <>
  <p><a href="#" >Home</a></p>
  <p><a href="#" >Menu</a></p>
  <p><a href="#" >Track Order</a></p>
  <p><a href="#" >Contact</a></p>
  </>
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
    <div className="cinder__navbar">
      <div className="cinder__navbar-logo">
        <Link to={navLinks[0].path}>
          {" "}
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="cinder__navbar-links">
        <p>
          <Link className="paths" to={navLinks[0].pathTwo}>
            {navLinks[0].name}
          </Link>
        </p>
        <p>
          <Link className="paths" to={navLinks[1].path}>
            {navLinks[1].name}
          </Link>
        </p>
        <p>
          <Link className="paths" to={navLinks[2].path}>
            {navLinks[2].name}
          </Link>
        </p>
        <p>
          <Link className="paths" to={navLinks[3].path}>
            {navLinks[3].name}
          </Link>
        </p>
        <span className="cart">
          <BsCart4 color="#ed7014" fontSize="2rem" />
          <span className="quantity">0</span>
        </span>
      </div>
      <div className="cinder__navbar-menu">
        {toggleMenu ? <RiCloseLine color="var(--primary-color)"  size={27} onClick={() => setToggleMenu(false) } /> : 
        <RiMenu3Line color="var(--primary-color)"  size={27} onClick={() => setToggleMenu(true) } /> }
        {toggleMenu && (
          <div className="cinder__navbar-menu_container scale-up-center">
            <div className="cinder__navbar-menu_container-links">
                <div>
                <Link className="paths" to={navLinks[0].pathTwo}>
                  {navLinks[0].name}
                </Link>
              </div>
              <div>
                <Link className="paths" to={navLinks[1].path}>
                  {navLinks[1].name}
                </Link>
              </div>
              <div>
                <Link className="paths" to={navLinks[2].path}>
                  {navLinks[2].name}
                </Link>
              </div>
              <div>
                <Link className="paths" to={navLinks[3].path}>
                  {navLinks[3].name}
                </Link>
              </div>
            </div>
          </div>
        )  
        }
      </div>
    </div>
    
  );
};

export default Navbar;
