import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/logo_new.png";
import HeartIconOrange from "../../assets/heartIconOrange.svg";
import ExpressVersand from "../../assets/Icon_Expressversand.svg";

const Navbar = () => {
    return (
        <div class={styles.root}>
            <img src={Logo} class={styles.logo} />
            <div class={styles.firstRow}>
                <div class={styles.titleContainer}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={HeartIconOrange} class={styles.heartIcon} />
                        <h2 style={{ color: "#f89b1b", marginLeft: 10 }}>
                            FRISCH GEKOCHT, DIREKT ZU DIR NACH HAUSE!
                        </h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={ExpressVersand} class={styles.heartIcon} />
                        <h2 style={{ color: "#fff", marginLeft: 10 }}>
                            {" "}
                            EXPRESSVERSAND IN DEUTSCHLAND
                        </h2>
                    </div>
                    <h2></h2>
                </div>
            </div>
            <div class={styles.secondRow}></div>
        </div>
    );
};

export default Navbar;
