/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Start learning with us now</h1>
        <p id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className="hero-btn">Start learning</button>
      </div>
      <div className="hero-image">
        <img src="/asset1.svg" alt="hero" />
      </div>
    </section>
  );
};

export default HeroSection;
