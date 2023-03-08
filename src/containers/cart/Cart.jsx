import React from "react";
import "./cart.css";
import Navbar from "../../components/navbar/Navbar";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <main className="cart">
        <div className="cart-header-bg">
          <div className="headers">
            <h1>How may we assist you today?</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
