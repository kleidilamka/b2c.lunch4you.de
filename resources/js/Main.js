import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MenuStyles from "./components/MenuStyles";
import Blog from "./pages/Blog";
import Checkout from "./pages/Checkout";
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
            <Blog />
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
