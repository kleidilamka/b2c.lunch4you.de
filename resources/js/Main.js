import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MenuStyles from "./components/MenuStyles";
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
            <Home />
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
