import React from "react";
import "../css/Squad.css";
import hi from "../assets/picture 2.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Squad() {
  const members = [
    {
      name: "Squadmate",
      image: hi,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Squad Mate",
      image: hi,
      github: "",
      instagram: "",
      linkedin: "",
    },
  ];

  return (
    <div className="squad-container">
      {members.map((member, index) => (
        <div key={index} className="profile-card">
          <img
            src={member.image}
            className="profile-pic"
          />
          <h3>{member.name}</h3>
          <div className="social-icons">
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} color="#000" />
            </a>
            <a href={member.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} color="#E1306C" />
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} color="#0077b5" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Squad;
