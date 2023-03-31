import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./ProductPage.css";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const ProductPage = ({ product, price, setPrice, quantity, setQuantity }) => {
  // fetch data from the product clicked

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    setPrice((quantity + 1) * product.price);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice((quantity - 1) * product.price);
    }
  };
  // return statement when the product is text-align: center;-align: center; found
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
          GHC{price}
        </p>
        <button className="add-item">Add to Cart</button>
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
            {quantity}
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
