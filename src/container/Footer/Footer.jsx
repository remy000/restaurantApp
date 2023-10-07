import React from "react";
import { images } from "../../constants";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">Kigali,Rwanda</p>
          <p className="p__opensans">+250788665544</p>
          <p className="p__opensans">+250788667766</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="logo" />
          <p className="p__opensans">Your best restaurant Ever</p>
          <img
            src={images.spoon}
            alt=""
            className="spoon__img"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Mon-Fri</p>
          <p className="p__opensans">08h00-00h00 </p>
          <p className="p__opensans">Sat-Sun</p>
          <p className="p__opensans">10h00 a.m-2h00 a.m</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
