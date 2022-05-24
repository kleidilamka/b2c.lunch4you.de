import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MenuStyles from "./components/MenuStyles";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import ProductDetails from "./pages/ProductDetails";
import Test from "./pages/Test";

function Main() {
    return (
        <div>
            <Checkout />
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
