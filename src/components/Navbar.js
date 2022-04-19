import React from "react";
import image from '../components/images/image.jpg';
import './style.css';
import logo from '../components/images/logo.png';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src={logo} className="logo" />

        <ul className="link1">
          <li>Home</li>
          <li>All recipes</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>

        <ul className="link2">
          <li>LogIn</li>
          <li>Sign Up</li>
        </ul>
      </div>
        <img
          src={image}
          style={{
            width: "100%",
            height: "510px",
          }}
        />
    </>
  );
};

export default Navbar;
