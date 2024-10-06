/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/Feeter.css";

const Feeter = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h2>Educare</h2>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li>Our Projects</li>
            <li>FAQ</li>
            <li>News and Updates</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacts</h3>
          <p>Address: LougeTown</p>
          <p>Email: educare@gmail.com</p>
          <p>Phone Number: +1 453-433-3255</p>
        </div>
      </div>
    </footer>
  );
};

export default Feeter;
