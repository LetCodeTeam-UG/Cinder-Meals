import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./menu.css";
import Main from "../../components/meals/Main";

const Menu = () => {
  const menuHeader = "Choose from a variety of dishes";
  const menuSubHeader = "From Local to Continental";

  return (
    <div>
      <Navbar />
      <div className="menu-header-bg">
        <div className="headers">
          <h1>{menuHeader}</h1>
          <h4>{menuSubHeader}</h4>
        </div>
      </div>
      <section className="menu">
        <div className="categories">
          <div className="menu-title">Menu</div>
          <div className="menu-categories">
            <select className="select-category" name="category" id="category">
              <option value="main">Main</option>
              <option value="beverages">Beverages</option>
            </select>
          </div>
        </div>
      </section>
      <Main />
      <Footer />
    </div>
  );
};

export default Menu;
