import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Menu.css";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";

const Menu = () => {
  const menuHeader = "Choose from a variety of dishes";
  const menuSubHeader = "From Local to Continental";

  const [meals, setMeals] = useState([]);
  // const [mainMeals, setMainMeals] = useState([]);
  // const [beverageMeals, setBeverageMeals] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/meals/")
      .then((response) => response.json())
      .then((data) => {
        const mealsData = data.meals;
        console.log(mealsData);
        setMeals(mealsData);
        // const errorMessage = data.error_message;
        // setMainMeals(data.filter((meal) => meal.type === "main"));
        // setBeverageMeals(data.filter((meal) => meal.category === "beverage"));
      });
  }, []);

  // const handleMainClick = () => {
  //   setMeals(originalMeals);
  // };

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
              <button className="main">Main</button>
              <button className="beverages">Beverages</button>
            </div>
          </div>
        </div>
      </section>
      <section className="menu-items">
        {meals.map((meal) => {
          return (
            <div key={meal.id} className="item-container">
              <img src={meal.image_url} alt={meal.title} className="dish-image" />
              {console.log(meal.image_url)}
              <h4 className="dish-name">{meal.title}</h4>
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
          );
        })}
      </section>

      <Footer />
    </>
  );
};

export default Menu;
