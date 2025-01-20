import React from "react";
import "../css/AboutUs.css";
import grouppic from "../assets/group picture.jpg";
import grouppic2 from "../assets/picture 2.jpg";
import grouppic3 from "../assets/picture 3.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="big-image-container">
        <img src={grouppic} alt="Group Picture 1" className="image big-image" />
      </div>
      <div className="small-images-container">
        <img src={grouppic2} alt="Group Picture 2" className="image small-image" />
        <img src={grouppic3} alt="Group Picture 3" className="image small-image" />
      </div>
    </div>
  );
};

export default AboutUs;
