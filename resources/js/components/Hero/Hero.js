import React from "react";
import FoodBackground from "../../assets/foodBackground.jpeg";
import FoodStyle from "../../assets/foodStyle.png";
import styles from "./Hero.modules.scss";

const Hero = () => {
    return (
        <div class={styles.root}>
            <div
                class={styles.bgImage}
                style={{
                    backgroundImage: `url("${FoodBackground}")`,
                }}
            ></div>
            <div class={styles.foodStylesContainer}>
                <h2 style={{ color: "##F89B1B" }}>
                    INTERNATIONAL, VIELFÄLTIG UND NIEMALS LANGWEILIG.
                </h2>
                <h4 class={styles.title}>WORAUF HAST DU HEUTE LUST?</h4>
                <div class={styles.foodStylesList}>
                    {Array.apply(null, { length: 7 }).map((e, i) => (
                        <div class={styles.foodStyles} key={i}>
                            <img
                                src={FoodStyle}
                                class={styles.foodStyleImage}
                            />
                            <h4 class={styles.label}>
                                GERMAN <br /> STYLE
                            </h4>
                        </div>
                    ))}
                </div>
                <h2 style={{ color: "##F89B1B", marginTop: 100 }}>
                    LECKERE UND GESUNDE MAHLZEITEN.
                </h2>
                <h4 class={styles.title}>
                    FÜR ALLE, BEI DENEN ES MAL SCHNELL GEHEN MUSS.
                </h4>
                <h4 class={styles.text}>
                    Wer kennt das nicht? Ein stressiger Tag, jetzt noch
                    einkaufen und dann an den Herd stellen und kochen.Dann heute
                    doch lieber doch den Fastfood-Lieferservice <br />
                    kommen lassen? Oft hat man die Wahl der Qual, aber LUNCH4YOU
                    bietet Euch eine optimale Alternative!
                </h4>

                <h4 class={styles.text}>
                    Wir kochen täglich frische, ausgewogene & gesunde Menüs, die
                    wir driekt kühlen und deutschlandweit per Express versenden.
                    So kannst Du bei uns aus einer <br />
                    abwechslungsreichen Vielfalt an internationalen Menüs
                    auswählen, Dir diese nach Hause liefern lassen und
                    genießen.Wir wünschen Bon Appetit!
                </h4>
            </div>
        </div>
    );
};

export default Hero;
