import React from "react";
import Navbar from "../parts/Navbars";
import HeroSlider from "../parts/Herosection"
import slides from "../Data/Slide"
import Content from '../parts/CenterContent'
import MainContent from "../parts/Maincontent";
import MultiCardCarousel from "../parts/MCartCrousels";
import productdata from "../Data/Slider";
import Footer from "../parts/Footer";

const Home=()=>{
    return(
        <div className="nutshell">
            <Navbar/>
            <HeroSlider slides={slides} />
            <Content/>
            <MainContent/>
            <MultiCardCarousel productData={productdata}/>
            <Footer/>
        </div>
    )
}
export default Home;