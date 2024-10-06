/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Educare</div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <button className="contact-btn">Contact us</button>
          </li>
          <li>
            <button className="register-btn">Register</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
