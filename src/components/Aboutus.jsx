import React from "react";
import "../css/AboutUs.css";
import grouppic from "../assets/group picture.jpg"; 

const AboutUs = () => {
  return (
    <div className="about-us">
      <img
        src={grouppic} 
        alt="Group Picture"
        className="large-image"
      />
    </div>
  );
};

export default AboutUs;
