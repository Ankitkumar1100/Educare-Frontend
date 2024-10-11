import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"; 
import Feeter from "../components/Feeter";
import AboutUs from "../components/About-us";

function Aboutus(){
    return(
        <div>
            <Header />
            <AboutUs />
            <Footer />
            <Feeter />
        </div>
    )
}

export default Aboutus;