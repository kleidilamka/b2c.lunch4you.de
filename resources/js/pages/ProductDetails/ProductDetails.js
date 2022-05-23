import React from "react";
import styles from "./ProductDetails.module.scss";
import Food from "../../assets/foodBackground.jpeg";
import HeartIcon from "../../assets/Icon_Herz_dark.svg";
const ProductDetails = () => {
    return (
        <div class={styles.root}>
            <div class={styles.container}>
                <div class={styles.topContainer}>
                    <div class={styles.topLeftContainer}>
                        <h1>THAI-CURRY</h1>
                        <h2 class={styles.text}>
                            Cremig, scharf und einfach ein Genuss! Die thailän-
                            dische Küche wäre ohne ihr anregendes Thai Curry nur
                            halb so berühmt.
                        </h2>
                        <h2 class={styles.text}>
                            Das saftige Hähnchenbrustfilet, knackiges Gemü- se,
                            cremige Kokosmilch sowie fluffiger Reis machen
                            dieses Gericht zu einem echten Sattmacher. Zitro-
                            nengras, Ingwer und Limette dürfen nicht fehlen und
                            sorgen für das authentische Thai-Feeling.
                        </h2>

                        <div class={styles.foodDetailsList}>
                            {Array.apply(null, { length: 3 }).map((e, i) => (
                                <div class={styles.foodDetailsContainer}>
                                    <h5>Low Carb</h5>
                                </div>
                            ))}
                        </div>
                        <h2 style={{ marginTop: 20, marginBottom: 20 }}>
                            NÄHRWERTE PRO 100 GRAMM
                        </h2>
                        <div class={styles.foodNutritionList}>
                            {Array.apply(null, { length: 5 }).map((e, i) => (
                                <div class={styles.foodNutritionDetails}>
                                    <div class={styles.roundedLabel}>103</div>
                                    <h5
                                        style={{
                                            alignSelf: "center",
                                            marginTop: 10,
                                        }}
                                    >
                                        PROTEIN
                                    </h5>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class={styles.topRightContainer}>
                        <img src={Food} class={styles.mainImage} />
                        <div class={styles.imagesContainer}>
                            {Array.apply(null, { length: 3 }).map((e, i) => (
                                <img src={Food} class={styles.image} />
                            ))}
                        </div>
                        <div class={styles.menuStyles}>
                            <img src={HeartIcon} class={styles.menuStyleLogo} />
                            <h1>ASIA STYLE</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
