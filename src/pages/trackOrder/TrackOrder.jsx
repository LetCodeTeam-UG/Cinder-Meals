import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./TrackOrder.css";
import track from "../../images/track.png";
import { GoSearch } from "react-icons/go";

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
          <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
            Follow up on your order
          </h1>
        </div>

        <section className="track-content_container">
          <div className="track-input">
            <input type="text" placeholder="Enter your order number" />
            <GoSearch className="search-icon" />
          </div>
          <div className="track-content_track">
            <img src={track} alt="track" />
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default TrackOrder;
