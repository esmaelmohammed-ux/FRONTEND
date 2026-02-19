import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Your go-to food delivery app
Order online • Pay securely • Track in real-time
Fresh food from local restaurants, fast! 🍕
Bringing restaurants to your home
Fresh meals • Smart cart • Easy checkout • Live tracking
Serving happiness, one delivery at a time
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />

            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+251952056360</li>
            <li>esmael6360@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />

      <p className="footer-copyright">
        copyright 2026 © Tomato.com - all rights reserved.
      </p>
      <span> Developed by Esmael Mohammed</span>
    </div>
  );
};

export default Footer;
