import React from "react";
import rice from "../../images/chicken-rice.jpg";
import jollof from "../../images/jollof-rice.jpg";
import salad from "../../images/chicken-salad.jpg";
import fries from "../../images/fries.jpg";
import noodles from "../../images/noodles.jpg";
import chicken from "../../images/grilled-chicken.jpg";
import "../../containers/menu/menu.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

const Main = () => {
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
    <>
      <section className="menu-items">
        <div className="item-container">
          <span className="item-image">
            <img src={meals[0].main[0].image} alt="assorted-rice" />
          </span>
          <span className="main-dish-name">{meals[0].main[0].name}</span>
          <Link to="" className="main-dish-price">
            <button>
              <span>{meals[0].main[0].price}</span>
              <span></span>
            </button>
          </Link>
        </div>
        <div className="item-container">
          <span className="item-image">
            <img src={meals[0].main[1].image} alt="jollof-rice" />
          </span>
          <span className="main-dish-name">{meals[0].main[1].name}</span>
          <Link to="" className="main-dish-price">
            <button>
              <span>{meals[0].main[1].price}</span>
              <span></span>
            </button>
          </Link>
        </div>
        <div className="item-container">
          <span className="item-image">
            <img src={meals[0].main[2].image} alt="chicken-salad" />
          </span>
          <span className="main-dish-name">{meals[0].main[2].name}</span>
          <Link to="" className="main-dish-price">
            <button>
              <span>{meals[0].main[2].price}</span>
              <span></span>
            </button>
          </Link>
        </div>
        <div className="item-container">
          <span className="item-image">
            <img src={meals[0].main[3].image} alt="french-fries" />
          </span>
          <span className="main-dish-name">{meals[0].main[3].name}</span>
          <Link to="" className="main-dish-price">
            <button>
              <span>{meals[0].main[3].price}</span>
              <span></span>
            </button>
          </Link>
        </div>
        <div className="item-container">
          <span className="item-image">
            <img src={meals[0].main[4].image} alt="assorted-noodles" />
          </span>
          <span className="main-dish-name">{meals[0].main[4].name}</span>
          <Link to="" className="main-dish-price">
            <button>
              <span>{meals[0].main[4].price}</span>
              <span></span>
            </button>
          </Link>
        </div>
        <div className="item-container">
          <span className="item-image">
            <img src={meals[0].main[5].image} alt="grilled-chicken" />
          </span>
          <span className="main-dish-name">{meals[0].main[5].name}</span>
          <Link to="" className="main-dish-price">
            <button>
              <span>{meals[0].main[5].price}</span>
              <span></span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Main;
