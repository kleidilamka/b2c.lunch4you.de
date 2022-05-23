import React from "react";

import Hero from "../../components/Hero";
import Reviews from "../../components/Reviews";
import Services from "../../components/Services";
import Slider from "../../components/Slider";
import ServicesTwo from "../../components/ServicesTwo";
import Products from "../../components/Products";
import FooterImages from "../../components/FooterImages";

const Home = () => {
    return (
        <div>
            <Hero />
            <Reviews />
            <Services />
            <Slider />
            <ServicesTwo />
            <Products />
            <FooterImages />
        </div>
    );
};

export default Home;
