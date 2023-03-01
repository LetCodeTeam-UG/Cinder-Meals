import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./productPage.css";

const ProductPage = () => {
  // fetch data from the product clicked
  const productHeader = "Almost there";
  const formPlaceHolders = [
    "Let us know what you don't like...",
    "Every other thing goes here...",
  ];

  return (
    <>
      <Navbar />
      <div className="product-header-bg">
        <div className="headers">
          <h1>{productHeader}</h1>
        </div>
      </div>
      <section className="product-display">
        <div>
          <p className="description"></p>
          <p className="topping"></p>
        </div>
        <div>{/* product image goes here */}</div>
      </section>
      {/* information section */}
      <section>
        <form action="" method="" className="info-form">
          <div className="allergies-box">
            <label htmlFor="allergies">Allergies</label>
            <textarea
              name="allergies"
              className="allergies"
              cols="30"
              rows="12"
              placeholder={formPlaceHolders[0]}
            ></textarea>
          </div>
          <div className="additional-info-box">
            <label htmlFor="allergies">Additional information</label>
            <textarea
              name="additional-info"
              className="additional-info"
              cols="30"
              rows="12"
              placeholder={formPlaceHolders[1]}
            ></textarea>
          </div>
        </form>
      </section>
      {/* product quantity section */}

      <Footer />
    </>
  );
};

export default ProductPage;
