import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function Main() {
    return (
        <div>
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
