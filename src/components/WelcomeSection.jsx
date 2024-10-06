/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/WelcomeSection.css";

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <div className="welcome-image">
        <img src="/asset2.svg" alt="Learning" />
      </div>
      <div className="welcome-text">
        <h2>Welcome to the Online Centers</h2>
        <ul>
          <li>Start learning from your experience</li>
          <li>Enhance your skills with us now</li>
          <li>Do your favorite course</li>
        </ul>
      </div>
    </section>
  );
};

export default WelcomeSection;
