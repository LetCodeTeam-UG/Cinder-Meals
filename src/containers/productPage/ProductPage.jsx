import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./productPage.css";
import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const ProductPage = () => {
  // fetch data from the product clicked

  // increase and decrease quantity on click
  const [changeQuantity, setChangeQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setChangeQuantity((prevchangeQuantity) => prevchangeQuantity + 1);
  };
  const handleDecreaseQuantity = () => {
    setChangeQuantity((prevchangeQuantity) => prevchangeQuantity - 1);
  };

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProduct = localStorage.getItem("product");
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
      // localStorage.removeItem("product");
    }
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

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
          <h1 className="name">{product.name}</h1>
          <p className="description">
            {product.description}{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              ratione consectetur. Qui doloribus voluptas, consequatur pariatur
              voluptatem sunt libero tempore hic omnis at quibusdam quia veniam
              enim, corporis laboriosam. Iusto asperiores perspiciatis facilis
              amet maxime quia rerum atque non quasi.
            </span>
          </p>
          <p className="topping-box">
            Default Topping:{" "}
            <span
              style={{
                color: "#ed7014",
                fontWeight: "600",
              }}
            >
              {product.topping}
            </span>
          </p>
        </div>
        <div>
          {/* product image goes here */}
          <img src={product.image} alt={product.name} />
        </div>
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
              rows="15"
              placeholder={formPlaceHolders[0]}
            ></textarea>
          </div>
          <div className="additional-info-box">
            <label htmlFor="allergies">Additional information</label>
            <textarea
              name="additional-info"
              className="additional-info"
              cols="30"
              rows="15"
              placeholder={formPlaceHolders[1]}
            ></textarea>
          </div>
        </form>
      </section>
      {/* product quantity section */}

      {/* cart container section goes here */}
      <div className="checkout-cart">
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#000e00",
          }}
        >
          GHC{product.price}
        </p>
        <BsCartPlus color="#ed7014" fontSize="4rem" />
        <div
          className="quantity-container"
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <AiOutlineMinusCircle
            fontSize="2rem"
            onClick={handleDecreaseQuantity}
          />
          <span
            className="quantity"
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
            }}
          >
            {changeQuantity}
          </span>
          <AiFillPlusCircle
            color="#ed7014"
            fontSize="2rem"
            onClick={handleIncreaseQuantity}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
