import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"; 
import Feeter from "../components/Feeter";
import Blogs from "../components/Blogs";


function Blog(){
    return(
        <div>
            <Header />
            <Blogs />
            <Footer />
            <Feeter />
        </div>
    )
}

export default Blog;