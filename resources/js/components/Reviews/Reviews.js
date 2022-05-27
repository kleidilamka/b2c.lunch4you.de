import React from "react";
import styles from "./Reviews.module.scss";
import { AiFillStar } from "react-icons/ai";

const Reviews = () => {
    return (
        <div class={styles.root}>
            <div class={styles.container}>
                <h2 class={styles.orangeTitle} style={{ color: "#F89B1B" }}>
                    DIE ZUFRIEDENHEIT UNSERER KUNDEN SPRICHT FÜR SICH.
                </h2>
                <h2 class={styles.bigTitle}>
                    DANKE, FÜR EUER TOLLES FEEDBACK.
                </h2>
                <div class={styles.starsContainer}>
                    <AiFillStar size={25} />
                    <AiFillStar size={25} />
                    <AiFillStar size={25} />
                    <AiFillStar size={25} />
                    <AiFillStar size={25} />
                </div>
                <h4 class={styles.text} style={{ fontWeight: "bold" }}>
                    Sehr leckeres und vor allem frisches (!) Essen zu echt
                    fairen Preisen!
                </h4>
                <h4 class={styles.text} style={{ width: "80%" }}>
                    Ich kenn' die Gerichte aus der Firma, wo wir einen
                    Essensautomat von lunch4you für warmes Mittagessen statt der
                    Kantine haben. Und wo das Essen, wird ja da aufgewärmt,
                    trotzdem nicht schmeckt wie alte Socken, sondern wie frisch
                    (!) gekocht. Während der Home Office Zeit können wir uns das
                    Essen auch nach Hause bestellen und liefern lassen. Schnelle
                    Lieferung, geschmacklich genauso gut. Würde hier auch so
                    Essen bestellen.
                </h4>
                <h4 class={styles.bottomText}>
                    Bianca Schmidt, Google Bewertung
                </h4>
            </div>
        </div>
    );
};

export default Reviews;
