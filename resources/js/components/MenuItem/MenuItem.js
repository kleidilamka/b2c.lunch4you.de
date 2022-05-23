import React from "react";
import styles from "./MenuItem.module.scss";
import Food from "../../assets/foodBackground.jpeg";

const MenuItem = () => {
    return (
        <div class={styles.container}>
            <div class={styles.item}>
                <img src={Food} class={styles.image} />
                {/* Middle Container */}
                <div class={styles.middleContainer}>
                    <h1 class={styles.text}>THAI-CURRY</h1>
                    <h4 class={styles.text}>
                        Zarte Hähnchenbrust mit buntem Gemüse und köstlicher
                        Kokosmilch auf leckerem Reis.
                    </h4>
                    {/* Menu Item Categories */}
                    <div class={styles.menuItemCategories}>
                        {/* Item Category Container */}
                        {Array.apply(null, { length: 3 }).map((e, i) => (
                            <div class={styles.categoryContainer}>
                                <h6>Low Carb</h6>
                            </div>
                        ))}
                    </div>
                    {/* Nutritions List */}
                    <div class={styles.nutritionsList}>
                        {/* Nutrition Container */}
                        {Array.apply(null, { length: 5 }).map((e, i) => (
                            <div class={styles.nutritionContainer}>
                                <div class={styles.roundedLabel}>
                                    <h6>103</h6>
                                </div>
                                <h5>Cal</h5>
                            </div>
                        ))}
                    </div>
                </div>
                <button class={styles.detailsButton}>Details</button>
            </div>
        </div>
    );
};

export default MenuItem;
