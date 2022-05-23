import React from "react";
import styles from "./Services.module.scss";
import ServicesIcon from "../../assets/servicesIcon.png";

const Services = () => {
    return (
        <div class={styles.root}>
            <h2 style={{ color: "#F89B1B" }}>WOFÜR WIR STEHEN.</h2>
            <h1 class={styles.title}>UNSER QUALITÄTSVERSPRECHEN. </h1>
            <h4 class={styles.text}>
                Gesund & lecker, frisch & nachhaltig hergestellt mit Zutaten,
                <br />
                die überwiegend in der Region produziert werden: das ist unser
                Konzept bei Lunch4You!
            </h4>
            <div class={styles.servicesList}>
                {Array.apply(null, { length: 4 }).map((e, i) => (
                    <div class={styles.container}>
                        <img src={ServicesIcon} class={styles.image} />
                        <h4 class={styles.text}>
                            GESUNDE & <br />
                            FRISCHE ZUTATEN
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
