import React, { useState } from "react";
import CheckoutStepOne from "../../components/CheckoutStepOne/CheckoutStepOne";
import CheckoutStepThree from "../../components/CheckoutStepThree";
import CheckoutStepTwo from "../../components/CheckoutStepTwo";
import styles from "./Checkout.module.scss";
import ForkIcon from "../../assets/forkIcon.svg";
import CheckoutIcon from "../../assets/Checkout_Icon.svg";

const Checkout = () => {
    const [step, setStep] = useState(3);

    return (
        <div class={styles.root}>
            {step === 4 ? (
                <div style={{ textAlign: "center" }}>
                    <h2 class={`${styles.title} ${styles.font}`}>
                        JETZT SCHWINGEN WIR DIE KOCHLÖFFEL.
                    </h2>
                    <h2 class={styles.bigTitle}>
                        VIELEN DANK FÜR DEINE BESTELLUNG.{" "}
                    </h2>
                </div>
            ) : (
                <div style={{ textAlign: "center" }}>
                    <h2 class={`${styles.title} ${styles.font}`}>
                        LOS GEHT'S.
                    </h2>
                    <h2 class={`${styles.bigTitle} ${styles.font}`}>
                        DEINE BESTELLUNG IN NUR 3 SCHRITTEN.
                    </h2>
                </div>
            )}
            {step > 4 && (
                <div class={styles.stepsContainer}>
                    <div class={styles.step}>
                        <h5>Step 1</h5>
                    </div>
                    <div class={styles.dashedLine} />
                    <div class={styles.step}>
                        <h5>Step 2</h5>
                    </div>
                    <div class={styles.dashedLine} />

                    <div class={styles.step}>
                        <h5>Step 3</h5>
                    </div>
                </div>
            )}

            {step === 1 ? (
                <CheckoutStepOne setStep={setStep} />
            ) : step === 2 ? (
                <CheckoutStepTwo setStep={setStep} />
            ) : step === 3 ? (
                <CheckoutStepThree setStep={setStep} />
            ) : (
                <img src={CheckoutIcon} class={styles.image} />
            )}
            {step === 4 && (
                <div>
                    <h4
                        class={styles.font}
                        style={{ marginTop: 24, fontSize: 24, fontWeight: 500 }}
                    >
                        Deine Lieferung erfolgt am 17.11.2021, ca. 9.00 Uhr
                    </h4>
                </div>
            )}
        </div>
    );
};

export default Checkout;
