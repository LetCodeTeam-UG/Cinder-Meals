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
// beverages
import watermelon from "../../images/watermelon-juice.jpg";
import orange from "../../images/orange-juice.jpg";
import lemonade from "../../images/lime-juice.jpg";
import heineken from "../../images/heineken.jpg";
import guinness from "../../images/guinness.jpg";
import coke from "../../images/coca-cola.jpg";
import { GoLinkExternal } from "react-icons/go";

const Menu = () => {
  const menuHeader = "Choose from a variety of dishes";
  const menuSubHeader = "From Local to Continental";

  const [meals, setMeals] = useState([
    {
      name: "Assorted Fried Rice",
      description:
        "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, debitis amet? Cupiditate earum incidunt doloremque eos ab a dicta quis?",
      id: "6fe1738a-0105-4434-a25a-fd1b5929338d",
      image: rice,
      price: 49.99,
      topping: "Chilli Sauce",
    },
    {
      name: "Jollof Rice",
      description:
        "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, debitis amet? Cupiditate earum incidunt doloremque eos ab a dicta quis?",
      id: "36262b4f-bd71-4279-8eb8-673b547db78d",
      topping: "Chicken",
      image: jollof,
      price: 44.99,
    },
    {
      name: "Chicken Salad",
      description:
        "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, debitis amet? Cupiditate earum incidunt doloremque eos ab a dicta quis?",
      id: "fb70b096-8aca-4fca-b6a8-89ce9b17272c",
      image: salad,
      price: 54.99,
    },
    {
      name: "French Fries",
      description:
        "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, debitis amet? Cupiditate earum incidunt doloremque eos ab a dicta quis?",
      id: "d49f08dc-1a8d-4345-aef3-5bcd9667f0af",
      image: fries,
      price: 34.99,
    },
    {
      name: "Assorted Noodles",
      description:
        "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, debitis amet? Cupiditate earum incidunt doloremque eos ab a dicta quis?",
      id: "a0be41ea-6402-4441-9579-c740fb83358b",
      image: noodles,
      price: 39.99,
    },
    {
      name: "Grilled Chicken",
      description:
        "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, debitis amet? Cupiditate earum incidunt doloremque eos ab a dicta quis?",
      id: "0d5fbf03-2f46-4d70-adfb-a0de8e13a1ee",
      image: chicken,
      price: 49.99,
    },
  ]);
  // eslint-disable-next-line
  const [originalMeals, setOriginalMeals] = useState(meals);

  const handleBeveragesClick = () => {
    const beverages = [
      {
        name: "Watermelon Juice",
        description:
          "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, debitis amet? Cupiditate earum incidunt doloremque eos ab a dicta quis?",
        id: "2f378c9f-b291-4e80-b452-d0e3a161740c",
        image: watermelon,
        price: 14.99,
      },
      {
        name: "Orange Juice",
        description:
          "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, debitis amet? Cupiditate earum incidunt doloremque eos ab a dicta quis?",
        id: "659c959c-94fd-4cf5-ab48-6264fb5d9f73",
        image: orange,
        price: 14.99,
      },
      {
        name: "Lemonade",
        description:
          "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, debitis amet? Cupiditate earum incidunt doloremque eos ab a dicta quis?",
        id: "42ed1122-b200-4f87-a6c9-de527b9b0294",
        image: lemonade,
        price: 19.99,
      },
      {
        name: "Heineken",
        description:
          "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, debitis amet? Cupiditate earum incidunt doloremque eos ab a dicta quis?",
        id: "5781b1ae-f3a7-4c64-ae74-bae60e8c62ee",
        image: heineken,
        price: 24.99,
      },
      {
        name: "Malta Guinness",
        description:
          "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, debitis amet? Cupiditate earum incidunt doloremque eos ab a dicta quis?",
        id: "4f9036d2-effe-4456-8a1e-a21f9561c4ca",
        image: guinness,
        price: 19.99,
      },
      {
        name: "Coca Cola",
        description:
          "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, debitis amet? Cupiditate earum incidunt doloremque eos ab a dicta quis?",
        id: "a4879be9-9c4d-490b-b0dd-6e142aac3e19",
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
      // store the product object in localStorage
      localStorage.setItem("product", JSON.stringify(product));
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
          <p className="menu-title">Menu</p>
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
            <h4 className="dish-name">{meal.name}</h4>
            <Link
              to={`/product/id?${meal.id}`}
              onClick={() => handleLinkClick(meal.id)}
              className="dish-price"
            >
              <button>
                {" "}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: ".2rem",
                  }}
                >
                  <span>GHC </span>
                  {meal.price}
                  {<GoLinkExternal color="white" size={20} />}
                </span>
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
