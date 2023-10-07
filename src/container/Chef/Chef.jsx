import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's word" />
        <h1 className="headtext__cormorant">What we believe in</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="qoute" />
            <p className="p__opensans">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              officiis reiciendis libero laudantium asperiores eaque, quos sint
              recusandae quas! Quis corporis magnam, atque unde fugiat soluta
              laudantium ut optio itaque?
            </p>
          </div>
        </div>
        <div className="app__chef-sign">
          <p>Tresor Xavier</p>
          <p className="p__opensans">Chef and Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Chef;
