import React from "react";
import styles from "./CheckoutStepOne.module.scss";
import Food from "../../assets/foodBackground.jpeg";
import { BsTrash } from "react-icons/bs";

const CheckoutStepOne = ({ setStep }) => {
    return (
        <div class={styles.root}>
            <h2 class={`${styles.title} ${styles.font}`}>
                STEP 1 VON 3: WARENKORB BESTELLÜBERSICHT
            </h2>
            <div class={styles.container}>
                <hr />
                {Array.apply(null, { length: 3 }).map((e, i) => (
                    <div class={styles.cartContainer}>
                        {/* First Column */}
                        <img src={Food} class={styles.image} />
                        {/* Second Column */}
                        <div class={styles.description}>
                            <div>
                                <h2 class={`${styles.fontBold} ${styles.font}`}>
                                    GERICHT{" "}
                                </h2>
                                <h2
                                    class={`${styles.fontWeight500} ${styles.font}`}
                                    style={{ marginTop: 12 }}
                                >
                                    THAI CURRY
                                </h2>
                            </div>
                            <div class={styles.deleteContainer}>
                                <h2
                                    class={`${styles.fontWeight500} ${styles.font}`}
                                    style={{ marginRight: 12 }}
                                >
                                    ENTFERNEN
                                </h2>
                                <BsTrash size={25} />
                            </div>
                        </div>
                        {/* Third Column */}
                        <div class={styles.thirdColumn}>
                            {/* Quantity Container */}
                            <div class={styles.quantityContainer}>
                                <h2 class={`${styles.fontBold} ${styles.font}`}>
                                    ANZAHL
                                </h2>
                                <div class={styles.quantity}>
                                    <div class={styles.minusContainer}>
                                        <h2
                                            class={`${styles.minusPlus} ${styles.font}`}
                                        >
                                            -
                                        </h2>
                                    </div>
                                    <h2
                                        class={`${styles.fontWeight500} ${styles.font}`}
                                    >
                                        4
                                    </h2>
                                    <div class={styles.plusContainer}>
                                        <h2
                                            class={`${styles.minusPlus} ${styles.font}`}
                                        >
                                            +
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            {/* Price Container */}
                            <div class={styles.priceContainer}>
                                <h2 class={`${styles.fontBold} ${styles.font}`}>
                                    PREIS
                                </h2>
                                <h2
                                    class={`${styles.fontWeight500} ${styles.font}`}
                                    style={{ marginTop: 12 }}
                                >
                                    € 8,50
                                </h2>
                            </div>
                        </div>
                        {/* Total Container */}
                        <div class={styles.totalContainer}>
                            <h2 class={`${styles.fontBold} ${styles.font}`}>
                                GESAMT
                            </h2>
                            <h2
                                class={`${styles.fontWeight500} ${styles.font}`}
                                style={{ marginTop: 12 }}
                            >
                                € 17,00
                            </h2>
                        </div>
                    </div>
                ))}
                {/* Coupon Container */}
                <div class={styles.couponContainer}>
                    <div class={styles.coupon}>
                        <h2 class={`${styles.fontBold} ${styles.font}`}>
                            RABATTCODE{" "}
                        </h2>
                        <input
                            class={styles.input}
                            placeholder="Code eingeben"
                        />
                    </div>
                    <h2 class={`${styles.fontWeight500} ${styles.font}`}>
                        -€ 5,00{" "}
                    </h2>
                </div>
                {/* Total Container */}
                <div class={styles.couponContainer}>
                    <h2 class={`${styles.fontBold} ${styles.font}`}>
                        GESAMTBETRAG
                    </h2>
                    <h2 class={`${styles.fontBold} ${styles.font}`}>
                        € 46,00{" "}
                    </h2>
                </div>
                {/* Button Container */}
                <div class={styles.couponContainer}>
                    <button
                        class={`${styles.button} ${styles.font}`}
                        style={{
                            backgroundColor: "#ea4c46",
                            opacity: "0,9",
                            fontSize: 28,
                        }}
                    >
                        ZURÜCK
                    </button>
                    <button
                        onClick={() => setStep(2)}
                        class={`${styles.button} ${styles.font}`}
                        style={{ backgroundColor: "#f89b1b", fontSize: 28 }}
                    >
                        BESTELLEN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutStepOne;
