import React from "react";
import styles from "./Slider.module.scss";
import MainImage from "../../assets/mainImage.jpeg";

const Slider = () => {
    return (
        <div
            class={styles.root}
            style={{
                backgroundImage: `url("${MainImage}")`,
            }}
        >
            <div class={styles.container}>
                <h2 style={{ color: "#A3F359" }}>MEHR LEBENSQUALITÄT</h2>
                <h2 class={styles.title}>
                    MEHR ZEIT FÜR DICH UND DEINE FAMILIE.
                </h2>
                <h5
                    class={styles.text}
                    style={{ fontWeight: "lighter", color: "#3c3c3c" }}
                >
                    Heutzutage ist es nicht leicht, Familie & Job unter einen
                    Hut zu bringen. Es gibt viel zu organisieren. Neben
                    Hausaufgaben stehen täglich zusätzlich viele To Dos an, so
                    dass häufig kaum Zeit fürs einkaufen und kochen bleibt. Wenn
                    es dann schnell gehen soll, ist es schwierig, dabei auch
                    noch ausgewogen und gesund zu kochen.
                </h5>
                <h5 class={styles.text}>
                    Hier bieten wir Euch die perfekte Lösung: Frisch gekocht,
                    abwechslungsreich, gesund & ausgewogen und dass ohne
                    Konservierungsstoffe & Geschmacksverstärker.
                </h5>
            </div>
        </div>
    );
};

export default Slider;
