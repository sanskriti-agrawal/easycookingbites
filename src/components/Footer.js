import React from "react";
import logo from "../components/images/logo.png";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="f1">
          <img src={logo} className="footer-image"></img>

          <a href="/" className="return">
            Return to Top <FaArrowUp />
          </a>
        </div>

        <div className="f2">
          <span className="about">About</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi <br />{" "}
            cupiditate. Voluptatum ducimus voluptates voluptas?
          </p>
        </div>

        <div className="f3">
          <span className="contact">Contact</span>
          <a href="mailto: easycookingbites@gmail.com">
            <FaEnvelope /> easycookingbites@gmail.com
          </a>
          <span className="phone">
            <FaPhoneSquareAlt /> 9045414351
          </span>
        </div>

        <div className="f4">
          <span className="sub">Subscribe</span>
          <div className="sites">
            <FaFacebook
              style={{
                color: "blue",
                marginRight:'4%',
              }}
            />

            <FaGoogle
              style={{
                color: "red",
                marginRight:'4%'
              }}
            />

            <FaTwitter
              style={{
                color: " #55acee",
                marginRight:'4%'
              }}
            />

            <FaDribbble
              style={{
                color: " #ea4c89",
                marginRight:'4%'
              }}
            />
          </div>
        </div>

        <div className="f5">
          <p>
            Copyright &copy; 2020 All Rights Reserved by
            <span> Easy Cooking Bites</span>
          </p>
    
        </div>
      </div>
    </>
  );
};

export default Footer;
