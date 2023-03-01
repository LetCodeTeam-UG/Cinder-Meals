import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
// beverages
import watermelon from "../../images/watermelon-juice.jpg";
import orange from "../../images/orange-juice.jpg";
import lemonade from "../../images/lime-juice.jpg";
import heineken from "../../images/heineken.jpg";
import guinness from "../../images/guinness.jpg";
import coke from "../../images/coca-cola.jpg";

const Menu = () => {
  const menuHeader = "Choose from a variety of dishes";
  const menuSubHeader = "From Local to Continental";

  const [meals, setMeals] = useState([
    {
      name: "Assorted Fried Rice",
      id: uuidv4(),
      image: rice,
      price: 49.99,
    },
    {
      name: "Jollof Rice",
      id: uuidv4(),
      image: jollof,
      price: 44.99,
    },
    {
      name: "Chicken Salad",
      id: uuidv4(),
      image: salad,
      price: 54.99,
    },
    {
      name: "French Fries",
      id: uuidv4(),
      image: fries,
      price: 34.99,
    },
    {
      name: "Assorted Noodles",
      id: uuidv4(),
      image: noodles,
      price: 39.99,
    },
    {
      name: "Grilled Chicken",
      id: uuidv4(),
      image: chicken,
      price: 49.99,
    },
  ]);
  const [originalMeals, setOriginalMeals] = useState(meals);

  const handleBeveragesClick = () => {
    const beverages = [
      {
        name: "Watermelon Juice",
        id: uuidv4(),
        image: watermelon,
        price: 14.99,
      },
      {
        name: "Orange Juice",
        id: uuidv4(),
        image: orange,
        price: 14.99,
      },
      {
        name: "Lemonade",
        id: uuidv4(),
        image: lemonade,
        price: 19.99,
      },
      {
        name: "Heineken",
        id: uuidv4(),
        image: heineken,
        price: 24.99,
      },
      {
        name: "Malta Guinness",
        id: uuidv4(),
        image: guinness,
        price: 19.99,
      },
      {
        name: "Coca Cola",
        id: uuidv4(),
        image: coke,
        price: 14.99,
      },
    ];
    setMeals(beverages);
  };

  const handleMainClick = () => {
    setMeals(originalMeals);
  };

  // get data when user clicks
  const handleLinkClick = (id) => {
    const product = meals.find((meal) => meal.id === id);
    if (product) {
      // transfer data to ProductPage.jsx
      // update address bar with product id and path
      // update the route to the Product Page in the app.js
    }
  };
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
            <div className="select-category" name="category" id="category">
              <button className="main" onClick={handleMainClick}>
                Main
              </button>
              <button className="beverages" onClick={handleBeveragesClick}>
                Beverages
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="menu-items">
        {meals.map((meal) => (
          <div key={meal.id} className="item-container">
            <img src={meal.image} alt={meal.name} className="dish-image" />
            <h3 className="dish-name">{meal.name}</h3>
            <Link
              to={`/meal/${meal.id}`}
              onClick={() => handleLinkClick(meal.id)}
              className="dish-price"
            >
              <button>
                {" "}
                <span>GHC{meal.price}</span>
              </button>
            </Link>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default Menu;
