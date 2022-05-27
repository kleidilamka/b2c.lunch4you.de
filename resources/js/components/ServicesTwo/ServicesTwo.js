import React from "react";
import styles from "./ServicesTwo.module.scss";
// import HandIcon from "../../assets/handIcon.png";
import HandIconLight from "../../assets/Icon_Bestellvorgang_01.svg";
import ClockIcon from "../../assets/Icon_Bestellvorgang_02.svg";
import CartIcon from "../../assets/Icon_Bestellvorgang_03.svg";
import ForkIcon from "../../assets/Icon_Bestellvorgang_04.svg";

const data = [
    {
        id: "1",
        image: HandIconLight,
        firstLabel: "MENÜS ONLINE",
        secondLabel: "AUSWÄHLEN",
    },
    {
        id: "2",
        image: ClockIcon,
        firstLabel: "DEINE BESTELLUNG",
        secondLabel: "ABSCHICKEN",
    },
    {
        id: "3",
        image: CartIcon,
        firstLabel: "WIR LIEFERN",
        secondLabel: "FRISCH & GEKÜHLT",
    },
    {
        id: "4",
        image: ForkIcon,
        firstLabel: "ZUBEREITEN UND",
        secondLabel: "GENIESSEN",
    },
];

const ServicesTwo = () => {
    return (
        <div class={styles.root}>
            <h1 class={`${styles.text} ${styles.font}`}>SO EINFACH, SO GUT.</h1>
            <h1 class={`${styles.title} ${styles.font}`}>
                BESTELLT, GEKOCHT, GELIEFERT: <br /> MIT WENIGEN KLICKS
                GENIESSEN.
            </h1>
            <div class={styles.servicesList}>
                {data.map((item) => (
                    <div>
                        <img src={item.image} class={styles.image} />
                        <h2 class={`${styles.text} ${styles.font}`}>
                            {item.id}.
                        </h2>
                        <h2 class={`${styles.text} ${styles.font}`}>
                            {item.firstLabel} <br /> {item.secondLabel}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesTwo;
