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
          <div className="track-follow">
            <h1>Follow up on your order</h1>
          </div>
        
          <div className="track-content_input" >
            <input type="number" placeholder="Enter your order number" />
            <button type="button" >Search
            </button>
          </div>
      </section>
      <Footer />
    </div>
  );
};

export default TrackOrder;
