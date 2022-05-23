import React from "react";
import styles from "./ServicesTwo.module.scss";
// import HandIcon from "../../assets/handIcon.png";
import HandIconLight from "../../assets/Icon_09.svg";

const ServicesTwo = () => {
    return (
        <div class={styles.root}>
            <h1 class={styles.text}>SO EINFACH, SO GUT.</h1>
            <h1 class={styles.title}>
                BESTELLT, GEKOCHT, GELIEFERT: <br /> MIT WENIGEN KLICKS
                GENIESSEN.
            </h1>
            <div class={styles.servicesList}>
                {Array.apply(null, { length: 4 }).map((e, i) => (
                    <div>
                        <img src={HandIconLight} class={styles.image} />
                        <h2 class={styles.text}>1.</h2>
                        <h2 class={styles.text}>
                            MENÜS ONLINE <br /> AUSWÄHLEN
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesTwo;
