/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/SignupSection.css";

const SignupSection = () => {
  return (
    <section className="signup">
      <div className="signup-content"></div><div className="signup-content">
        <h2>Start Learning by Creating a Free Account</h2>
        <form className="signup-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email Address" />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};

export default SignupSection;
