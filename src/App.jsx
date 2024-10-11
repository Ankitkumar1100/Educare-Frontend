import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import SignupSection from "./components/SignupSection";
import CommunitySection from "./components/CommunitySection";
import Footer from "./components/Footer"; 
import Feeter from "./components/Feeter";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <SignupSection />
      <CommunitySection />
      <Footer />
      <Feeter />
    </div>
  );
}

export default App;
