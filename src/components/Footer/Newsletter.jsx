import React from "react";

import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="NewsLetter" />
        <h1 className="headtext__cormorant">Subscribe to Our NewsLetter</h1>
        <p className="p__opensans">and Never miss our last update</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="enter your email" />
        <button className="custom__button">Subscribe </button>
      </div>
    </div>
  );
};

export default Newsletter;
