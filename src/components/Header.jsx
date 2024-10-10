import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Educare</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="/Courses">Courses</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
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
