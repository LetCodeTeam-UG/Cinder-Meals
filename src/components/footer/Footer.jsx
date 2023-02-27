import React from 'react'
import logo from "../../images/logo.png"
import './footer.css'
import { BsInstagram, BsTwitter, BsFacebook, BsMessenger } from "react-icons/bs";


const Footer = () => {
  return (
    <div>
      <div className="cinder__footer">
        <div className="cinder__footer-links">
          <div className="cinder__footer-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="cinder__footer-links_icons">
           <BsInstagram size={30} />
           <BsTwitter size={30} />
           <BsFacebook size={30} />
           <BsMessenger size={30} />
          </div>
          <div className="cinder__footer-copyright">
            <p>COPYRIGHT © 2023 <span className='cinder__footer-copyright-cinder' >CINDER MEALS.</span> ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer