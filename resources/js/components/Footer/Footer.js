import React from "react";
import styles from "./Footer.module.scss";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div class={styles.root}>
            <div class={styles.subscribeContainer}>
                <h2 style={{ color: "#bd006c" }}>LECKER NEWSELLTER.</h2>
                <h1 class={styles.title}>
                    JETZT FÜR UNSEREN NEWSLETTER ANMELDEN UND GRATISVERSAND
                    SICHERN!
                    <div class={styles.inputs}>
                        <input
                            class={styles.input}
                            placeholder="E-Mail eingeben"
                        />
                        <button class={styles.button}>
                            NEWSLETTER BESTELLEN
                        </button>
                    </div>
                </h1>
            </div>
            <div class={styles.topContainer}>
                <FaInstagram size={30} color={"white"} />
                <FaFacebookSquare size={30} color={"white"} />
            </div>
            <div class={styles.middleContainer}></div>
            <div class={styles.bottomContainer}>
                <h4>© 2022 Creativ-Cult All rights reserved.</h4>
            </div>
        </div>
    );
};

export default Footer;
