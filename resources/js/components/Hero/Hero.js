import React from "react";
import MainImage from "../../assets/mainImage.jpg";
import MenuStyles from "../MenuStyles";
import styles from "./Hero.modules.scss";

const Hero = () => {
    return (
        <div class={styles.root}>
            <div
                class={styles.bgImage}
                style={{
                    backgroundImage: `url("${MainImage}")`,
                }}
            ></div>
            <div class={styles.foodStylesContainer}>
                <h2
                    class={styles.font}
                    style={{ color: "#F89B1B", marginTop: 30, fontSize: 32 }}
                >
                    INTERNATIONAL, VIELFÄLTIG UND NIEMALS LANGWEILIG.
                </h2>
                <h4 class={`${styles.title} ${styles.font}`}>
                    WORAUF HAST DU HEUTE LUST?
                </h4>
                <MenuStyles />
                <h2
                    class={styles.font}
                    style={{
                        marginTop: 100,
                        color: "#F89B1B",
                        fontSize: 32,
                    }}
                >
                    LECKERE UND GESUNDE MAHLZEITEN.
                </h2>
                <h4 class={`${styles.title} ${styles.font}`}>
                    FÜR ALLE, BEI DENEN ES MAL SCHNELL GEHEN MUSS.
                </h4>
                <div class={styles.textContainer}>
                    <h4 class={`${styles.text} ${styles.font}`}>
                        Wer kennt das nicht? Ein stressiger Tag, jetzt noch
                        einkaufen und dann an den Herd stellen und kochen.Dann
                        heute doch lieber doch den Fastfood-Lieferservice kommen
                        lassen? Oft hat man die Wahl der Qual, aber LUNCH4YOU
                        bietet Euch eine optimale Alternative!
                    </h4>

                    <h4
                        class={`${styles.text} ${styles.font}`}
                        style={{ marginBottom: 50 }}
                    >
                        Wir kochen täglich frische, ausgewogene & gesunde Menüs,
                        die wir driekt kühlen und deutschlandweit per Express
                        versenden. So kannst Du bei uns aus einer
                        abwechslungsreichen Vielfalt an internationalen Menüs
                        auswählen, Dir diese nach Hause liefern lassen und
                        genießen.Wir wünschen Bon Appetit!
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Hero;
