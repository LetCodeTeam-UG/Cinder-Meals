import React from "react";
import Navbar from "../../components/navbar/Navbar";
<<<<<<< HEAD
import grilled from "../../images/grilled-chicken.jpg";
=======
import Footer from "../../components/footer/Footer";
import main from "../../images/home-dish-main.jpg";
>>>>>>> 4a50e110c2fb526e2df57e3184b0d1c72c400c16
import jollof from "../../images/jollof-rice.jpg";
import side from "../../images/home-dish-one.jpg";
import { Link } from "react-router-dom";
import "../home/home.css";

const Home = () => {
  const homeHeader = "A genuine fine-dining experience awaits.";
  const redirectBtns = [
    {
      name: "View Menu",
      link: "/menu",
    },
    {
      name: "Track Your Order",
      link: "/trackorder",
    },
  ];
  return (
    <div>
      <>
        <Navbar />
        {/* three main meals displayed */}
        <section className="menu-glimpse">
          <div>
            <img src={grilled} alt="grilled" />
          </div>
          <div>
            <img src={side} alt="main-two" />
          </div>
          <div>
            <img src={jollof} alt="jollof" />
          </div>
        </section>
        {/* a text that inspires and some buttons */}
        <section className="menu-display">
          <h1 className="home-header">{homeHeader}</h1>
          <div className="redirect">
            <button className="menu-link">
              {" "}
              <Link className="link" to={redirectBtns[0].link}>
                {redirectBtns[0].name}
              </Link>{" "}
            </button>
            <button className="track-link">
              {" "}
              <Link className="link" to={redirectBtns[1].link}>
                {redirectBtns[1].name}
              </Link>{" "}
            </button>
          </div>
        </section>

        <Footer />
      </>
    </div>
  );
};

export default Home;
