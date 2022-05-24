import React from "react";
import styles from "./MenuItem.module.scss";
import Food from "../../assets/food.png";

const MenuItem = () => {
    return (
        <div class={styles.root}>
            {Array.apply(null, { length: 7 }).map((e, i) => (
                <div class={styles.container} key={i}>
                    <img src={Food} class={styles.image} />
                    <div></div>
                </div>
            ))}
        </div>
    );
};

export default MenuItem;
