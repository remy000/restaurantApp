import React from "react";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";

import "./Header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper-info">
        <SubHeading title="Test your favorite Meal" />
        <h1 className="app__header-h1">Fine Dining Restaurant</h1>
        <p className="p__opensans" style={{ margin: "2rem 2rem 2rem 0" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          ducimus quam quae recusandae non sint. Tempora, veritatis corrupti
          officia pariatur voluptatem molestias.
        </p>
        <button type="button" className="custom__button">
          <a href="#menu" style={{ textDecoration: "none" }}>
            Explore Menu
          </a>
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header" />
      </div>
    </div>
  );
};

export default Header;
