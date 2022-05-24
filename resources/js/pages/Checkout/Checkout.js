import React, { useState } from "react";
import CheckoutStepOne from "../../components/CheckoutStepOne/CheckoutStepOne";
import CheckoutStepThree from "../../components/CheckoutStepThree";
import CheckoutStepTwo from "../../components/CheckoutStepTwo";
import styles from "./Checkout.module.scss";

const Checkout = () => {
    const [step, setStep] = useState(3);

    return (
        <div class={styles.root}>
            <h2 class={styles.title}>LOS GEHT'S.</h2>
            <h2 class={styles.bigTitle}>
                DEINE BESTELLUNG IN NUR 3 SCHRITTEN.
            </h2>
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
            {step === 1 ? (
                <CheckoutStepOne setStep={setStep} />
            ) : step === 2 ? (
                <CheckoutStepTwo setStep={setStep} />
            ) : step === 3 ? (
                <CheckoutStepThree setStep={setStep} />
            ) : null}
        </div>
    );
};

export default Checkout;
