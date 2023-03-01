import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./trackOrder.css";

const TrackOrder = () => {
  return (
    <div>
      <Navbar />
      <section className="track">
        <div className="track-header-bg">
          <div className="headers">
            <h1>Track Your Order</h1>
          </div>
        </div>
      </section>
      <section className="track-your-order">
        <div className="track-your-order-">
          <div className="track-follow">
            <h1>Follow up on your order</h1>
          </div>
        </div>
        <div className="track-your-order_button" >
          <input type="text" />
          <button className="track-your-orderbutton" >Search
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TrackOrder;
