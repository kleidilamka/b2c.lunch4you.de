import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Koche from "./pages/Koche";
import Lieferanten from "./pages/Lieferanten";
import Menus from "./pages/Menus";
import ProductDetails from "./pages/ProductDetails";
import Test from "./pages/Test";
import UberLunch4You from "./pages/UberLunch4You";

function Main() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menus" element={<Menus />} />
                <Route path="/product" element={<ProductDetails />} />
                <Route path="lieferanten" element={<Lieferanten />} />
                <Route path="/koche" element={<Koche />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<Faq />} />
            </Routes>
        </div>
    );
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(
        <BrowserRouter>
            <Main />
        </BrowserRouter>,
        document.getElementById("main")
    );
}
