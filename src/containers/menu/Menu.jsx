import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./menu.css";
import { Link } from "react-router-dom";
import rice from "../../images/chicken-rice.jpg";
import jollof from "../../images/jollof-rice.jpg";
import salad from "../../images/chicken-salad.jpg";
import fries from "../../images/fries.jpg";
import noodles from "../../images/noodles.jpg";
import chicken from "../../images/grilled-chicken.jpg";

const Menu = () => {
  const menuHeader = "Choose from a variety of dishes";
  const menuSubHeader = "From Local to Continental";

  const meals = [
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
  ];

  return (
    <>
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
      <section className="menu-items">
        <div className="item-container">
          <span className="item-image">
            <img src={meals[0].image} alt="assorted-rice" />
          </span>
          <span className="main-dish-name">{meals[0].name}</span>
          <Link to="" className="main-dish-price">
            <button>
              <span>{meals[0].price}</span>
              <span></span>
            </button>
          </Link>
        </div>
        <div className="item-container">
          <span className="item-image">
            <img src={meals[1].image} alt="jollof-rice" />
          </span>
          <span className="main-dish-name">{meals[1].name}</span>
          <Link to="" className="main-dish-price">
            <button>
              <span>{meals[1].price}</span>
              <span></span>
            </button>
          </Link>
        </div>
        <div className="item-container">
          <span className="item-image">
            <img src={meals[2].image} alt="chicken-salad" />
          </span>
          <span className="main-dish-name">{meals[2].name}</span>
          <Link to="" className="main-dish-price">
            <button>
              <span>{meals[2].price}</span>
              <span></span>
            </button>
          </Link>
        </div>
        <div className="item-container">
          <span className="item-image">
            <img src={meals[3].image} alt="french-fries" />
          </span>
          <span className="main-dish-name">{meals[3].name}</span>
          <Link to="" className="main-dish-price">
            <button>
              <span>{meals[3].price}</span>
              <span></span>
            </button>
          </Link>
        </div>
        <div className="item-container">
          <span className="item-image">
            <img src={meals[4].image} alt="assorted-noodles" />
          </span>
          <span className="main-dish-name">{meals[4].name}</span>
          <Link to="" className="main-dish-price">
            <button>
              <span>{meals[4].price}</span>
              <span></span>
            </button>
          </Link>
        </div>
        <div className="item-container">
          <span className="item-image">
            <img src={meals[5].image} alt="grilled-chicken" />
          </span>
          <span className="main-dish-name">{meals[5].name}</span>
          <Link to="" className="main-dish-price">
            <button>
              <span>{meals[5].price}</span>
              <span></span>
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Menu;
