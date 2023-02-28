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
      <Footer />
    </div>
  );
};

export default TrackOrder;
