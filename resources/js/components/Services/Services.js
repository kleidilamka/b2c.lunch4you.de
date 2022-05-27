import React from "react";
import styles from "./Services.module.scss";
import ServicesIcon from "../../assets/servicesIcon.png";
import Icon1 from "../../assets/Icon_Qualitaet_1.svg";
import Icon2 from "../../assets/Icon_Qualitaet_2.svg";
import Icon3 from "../../assets/Icon_Qualitaet_3.svg";
import Icon4 from "../../assets/Icon_Qualitaet_4.svg";

const data = [
    {
        id: "1",
        image: Icon1,
        firstLabel: "GESUNDE &",
        secondLabel: "FRISCHE ZUTATEN",
        color: "#91CB17",
    },
    {
        id: "2",
        image: Icon2,
        firstLabel: "REGIONAL",
        secondLabel: "HERGSTELLT",
        color: "#FFAF32",
    },
    {
        id: "3",
        image: Icon3,
        firstLabel: "FRISCH",
        secondLabel: "GELIEFERT",
        color: "#4CADBD",
    },
    {
        id: "4",
        image: Icon4,
        firstLabel: "IN NUR 4 MINUTEN",
        secondLabel: "ZUBEREITET",
        color: "#E4015C",
    },
];

const Services = () => {
    return (
        <div class={styles.root}>
            <h2 class={styles.orangeTitle}>WOFÜR WIR STEHEN.</h2>
            <h1 class={styles.title}>UNSER QUALITÄTSVERSPRECHEN. </h1>
            <h4 class={styles.text}>
                Gesund & lecker, frisch & nachhaltig hergestellt mit Zutaten,
                <br />
                die überwiegend in der Region produziert werden: das ist unser
                Konzept bei Lunch4You!
            </h4>
            <div class={styles.servicesList}>
                {data.map((item) => (
                    <div class={styles.container}>
                        <img src={item.image} class={styles.image} />
                        <h4
                            class={styles.text}
                            style={{
                                color: item.color,
                                fontSize: 36,
                                marginTop: 20,
                            }}
                        >
                            {item.firstLabel} <br />
                            {item.secondLabel}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
