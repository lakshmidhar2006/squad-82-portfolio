import React from 'react'; 

import { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const navbar = useRef(null);
 

  return (
    <nav>
      
      <div className="logo"> <img className='logo-img' src="/src/assets/Logo.png" alt="" />82</div>
      <div className='toggle' >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
        </div>
      <div className='navbar'  ref={navbar}>

        <button onClick={()=>{
          navigate("/")
        }}>Home
        </button>
        <button onClick={()=>{
          navigate("/about")
        }}>About</button>
        <button onClick={()=>{
          navigate("/squad")
        }}>Squad</button>
        <button onClick={()=>{
          navigate("/projects")
        }}>Projects</button>
        <button onClick={()=>{
          navigate("/activities")
        }}>Activities</button>
          </div>

          {/* The drop down menu */}

    
    </nav>
  );
};

export default Navbar;
