import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import rice from "../../images/chicken-rice.jpg";
import jollof from "../../images/jollof-rice.jpg";
import salad from "../../images/chicken-salad.jpg";
import fries from "../../images/fries.jpg";
import noodles from "../../images/noodles.jpg";
import chicken from "../../images/grilled-chicken.jpg";
import "./menu.css";

const Menu = () => {
  const menuHeader = "Choose from a variety of dishes";
  const menuSubHeader = "From Local to Continental";

  const meals = [
    {
      main: [
        {
          name: "Assorted Fried Rice",
          id: "",
          image: rice,
          price: "GHC50.00",
        },
        {
          name: "Jollof Rice",
          id: "",
          image: jollof,
          price: "GHC45.00",
        },
        {
          name: "Chicken Salad",
          id: "",
          image: salad,
          price: "GHC55.00",
        },
        {
          name: "French Fries",
          id: "",
          image: fries,
          price: "GHC35.00",
        },
        {
          name: "Assorted Noodles",
          id: "",
          image: noodles,
          price: "GHC40.00",
        },
        {
          name: "Grilled Chicken",
          id: "",
          image: chicken,
          price: "GHC50.00",
        },
      ],
    },
  ];
  return (
    <div>
      <Navbar />
      <section className="menu">
        <div className="menu-header-bg">
          <div className="headers">
            <h1>{menuHeader}</h1>
            <p>{menuSubHeader}</p>
          </div>
          <div className="categories">
            <div className="menu-title">Menu</div>
            <div className="menu-categories">
              <button className="main">{console.log(meals[0])}</button>
              <button className="beverages">{console.log(meals[1])}</button>
            </div>
          </div>
        </div>
        {/* the main menu of the page goes here */}
        <section className="menu-items">
          <div className="item-container">
            <span className="item-image">
              <img src={meals[0].main[0].image} alt="assorted-rice" />
            </span>
            <span></span>
            <span></span>
          </div>
          <div className="item-container">
            <span className="item-image">
              <img src={meals[0].main[1].image} alt="jollof-rice" />
            </span>
            <span></span>
            <span></span>
          </div>
          <div className="item-container">
            <span className="item-image">
              <img src={meals[0].main[2].image} alt="chicken-salad" />
            </span>
            <span></span>
            <span></span>
          </div>
          <div className="item-container">
            <span className="item-image">
              <img src={meals[0].main[3].image} alt="french-fries" />
            </span>
            <span></span>
            <span></span>
          </div>
          <div className="item-container">
            <span className="item-image">
              <img src={meals[0].main[4].image} alt="assorted-noodles" />
            </span>
            <span></span>
            <span></span>
          </div>
          <div className="item-container">
            <span className="item-image">
              <img src={meals[0].main[5].image} alt="grilled-chicken" />
            </span>
            <span></span>
            <span></span>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Menu;
