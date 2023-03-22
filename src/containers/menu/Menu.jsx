import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./menu.css";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";

const Menu = () => {
  const menuHeader = "Choose from a variety of dishes";
  const menuSubHeader = "From Local to Continental";

  const [meals, setMeals] = useState([]);
  const [mainMeals, setMainMeals] = useState([]);
  // const [beverageMeals, setBeverageMeals] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/meals/")
      .then((response) => response.json())
      .then((data) => {
        setMeals(data);
        setMainMeals(data.filter((meal) => meal.type === "main"));
        // setBeverageMeals(data.filter((meal) => meal.category === "beverage"));
      });
  }, [meals]);

  // const handleMainClick = () => {
  //   setMeals(originalMeals);
  // };

  // get data when user clicks
  const handleLinkClick = (id) => {
    const product = mainMeals.find((meal) => meal.id === id);
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
              <button className="main">Main</button>
              <button className="beverages">Beverages</button>
            </div>
          </div>
        </div>
      </section>
      <section className="menu-items">
        {mainMeals.map((meal) => (
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
