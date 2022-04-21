import React from "react";
import './style.css';
import logo from '../components/images/logo.png';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src={logo} className="logo" />

        <ul className="link1">
          <a href="/"> <li>Home</li></a>
          <a href="/all-recipe"><li>All recipes</li></a>
          <a href="/blog"><li>Blog</li></a>
         <a href="/contact"> <li>Contact Us</li></a>
        </ul>

        <ul className="link2">
          <a href="/signup"><li>LogIn</li></a>
         <a href="/signup"> <li style={{border:'1px solid black', height:'45px',width:'90px',paddingLeft:'10px'}}>Sign Up</li></a>
        </ul>
      </div>
       
    </>
  );
};

export default Navbar;
