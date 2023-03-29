import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Contact.css";
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
const Contact = () => {
  const greeting = "Get in touch";
  const subGreeting = "Contact us for all your enquiries";
  return (
    <div>
      <Navbar />
      <main className="contact">
        <div className="contact-header-bg">
          <div className="headers">
            <h1>How may we assist you today?</h1>
          </div>
        </div>
        <section className="contact-box">
          <h1>{greeting}</h1>
          <h3>{subGreeting}</h3>
          <div className="socials">
            <div className="location-container">
              <span>
                <BiLocationPlus color="#ed7014" fontSize="2rem" />
              </span>
              <span style={{ fontWeight: "600" }}>Antis, North-Legon</span>
            </div>
            <div className="phone-container">
              <span>
                <BiPhoneCall color="#ed7014" fontSize="2rem" />
              </span>
              <span style={{ fontWeight: "600" }}>+233 20 558 2492</span>
            </div>
            <div className="mail-container">
              <span>
                <BsEnvelope color="#ed7014" fontSize="2rem" />
              </span>
              <span style={{ fontWeight: "600" }}>info@cindermeals.com</span>
            </div>
          </div>
        </section>

        {/* contact us container */}
        <section className="contact-container">
          <form action="" method="" className="contact-form">
            <div className="message-sender">
              <div className="name-box">
                <label htmlFor="name">Your Name</label>
                <input type="text" className="name" />
              </div>
              <div className="email-box">
                <label htmlFor="email">E-mail Address</label>
                <input type="email" className="email" />
              </div>
              <div className="phone-box">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" className="phone" />
              </div>
            </div>
            {/* message */}
            <div className="message-input">
              <label htmlFor="message" className="msg">
                Leave a message
              </label>
              <textarea
                name="message"
                className="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </form>
          <div className="send-box">
            <input type="submit" className="submit" value="Send Message" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
