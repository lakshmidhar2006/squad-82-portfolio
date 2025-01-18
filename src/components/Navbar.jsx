import React from 'react';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const navigator = (redirect)=>{
    navigate(redirect);
  }
  return (
    <nav>
      <ul>
        <li onClick={()=>{
          navigate("/")
        }}>Home</li>
        <li onClick={()=>{
          navigate("/about")
        }}>About</li>
        <li onClick={()=>{
          navigate("/projects")
        }}>Projects</li>
        <li onClick={()=>{
          navigate("/activities")
        }}>Activities</li>
      </ul>
    </nav>
  );
};

export default Navbar;
