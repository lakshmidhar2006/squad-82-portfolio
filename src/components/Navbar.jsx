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
      
      <div className="logo"> <img className='logo-img' src="/src/assets/Logo.png" alt="" />82</div>
      <div className='navbar' >

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
        <div className='toggle'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        </div>
    
    </nav>
  );
};

export default Navbar;
