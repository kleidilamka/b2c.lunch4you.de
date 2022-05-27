import React from "react";
import styles from "./Koche.module.scss";
import Header from "../../assets/Header_Koeche.jpg";

const Koche = () => {
    return (
        <div class={styles.root}>
            <div
                class={styles.bgImage}
                style={{
                    backgroundImage: `url("${Header}")`,
                }}
            ></div>
            <div class={styles.container}>
                <h2 class={`${styles.text} ${styles.font}`}>
                    UNSER ONLINE-RESTAURANT - IMMER FÜR DICH DA!
                </h2>
                <h2 class={`${styles.title} ${styles.font}`}>
                    BEI UNS KOCHEN ECHTE KÖCHE AUF BESTELLUNG.
                </h2>
                <h4
                    class={`${styles.description} ${styles.font}`}
                    style={{ width: "80%" }}
                >
                    Wir von Lunch4You hatten die Vision: leckere Fertiggerichte,
                    aber besser. Von echten Köchen mit Know-How mit Hand und
                    ganz viel Liebe zubereitet. Also das erste richtige
                    Online-Restaurant - das muss doch gehen. Und ja, das tut es.
                </h4>
            </div>
        </div>
    );
};

export default Koche;
