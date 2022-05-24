import React, { useState } from "react";
import CheckoutStepOne from "../../components/CheckoutStepOne/CheckoutStepOne";
import CheckoutStepThree from "../../components/CheckoutStepThree";
import CheckoutStepTwo from "../../components/CheckoutStepTwo";
import styles from "./Checkout.module.scss";
import ForkIcon from "../../assets/forkIcon.svg";

const Checkout = () => {
    const [step, setStep] = useState(1);

    return (
        <div class={styles.root}>
            {step === 4 ? (
                <div style={{ textAlign: "center" }}>
                    <h2 class={styles.title}>
                        JETZT SCHWINGEN WIR DIE KOCHLÖFFEL.
                    </h2>
                    <h2 class={styles.bigTitle}>
                        VIELEN DANK FÜR DEINE BESTELLUNG.{" "}
                    </h2>
                </div>
            ) : (
                <div style={{ textAlign: "center" }}>
                    <h2 class={styles.title}>LOS GEHT'S.</h2>
                    <h2 class={styles.bigTitle}>
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
                <div class={styles.iconsContainer}>
                    <img src={ForkIcon} class={styles.icon} />
                    <div class={styles.dashedLine} />
                    <img src={ForkIcon} class={styles.icon} />

                    <div class={styles.dashedLine} />

                    <img src={ForkIcon} class={styles.icon} />
                </div>
            )}
            {step === 4 && (
                <div>
                    <h4 style={{ marginTop: 24, fontSize: 18 }}>
                        Deine Lieferung erfolgt am 17.11.2021, ca. 9.00 Uhr
                    </h4>
                </div>
            )}
        </div>
    );
};

export default Checkout;
