import React from "react";
import MenuCategories from "../../components/MenuCategories";
import MenuStyles from "../../components/MenuStyles";
import styles from "./Menus.module.scss";

const Menus = () => {
    return (
        <div class={styles.root}>
            <h2 style={{ color: "#F89B1B" }}>
                FÜR JEDEN GESCHMACK DAS RICHTIGE DABEI.
            </h2>
            <h2 class={styles.title}>
                MACHEN SIE MIT UNS <br />
                EINE KULINARISCHE WELTREISE.
            </h2>
            {/* Menu Styles */}
            <MenuStyles />
            {/* Menu Categories */}
            <MenuCategories />
        </div>
    );
};

export default Menus;
