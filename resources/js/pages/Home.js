import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import ServicesTwo from "../components/ServicesTwo";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div>
            <Hero />
            <Reviews />
            <Services />
            <Slider />
            <ServicesTwo />
            <Products />
        </div>
    );
};

export default Home;
