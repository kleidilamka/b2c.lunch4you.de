import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MenuStyles from "./components/MenuStyles";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import ProductDetails from "./pages/ProductDetails";

function Main() {
    return (
        <div>
            <ProductDetails />
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
