import React from "react";
import styles from "./CheckoutStepTwo.module.scss";

const CheckoutStepTwo = ({ setStep }) => {
    return (
        <div class={styles.root}>
            <h2 class={styles.title}>
                STEP 2 VON 3: REGISTRIERUNG ODER ANMELDUNG
            </h2>
            <h2></h2>
            <div class={styles.container}>
                <hr />
                <div class={styles.registerContainer}>
                    {/* First Row */}
                    <div class={styles.row}>
                        <div class={styles.column}>
                            <h2>VORNAME*</h2>
                            <input
                                class={styles.input}
                                placeholder="Vornamen eingeben"
                            />
                        </div>
                        <div class={styles.column}>
                            <h2>NACHNAME*</h2>
                            <input
                                class={styles.input}
                                placeholder="Nachnamen eingeben"
                            />
                        </div>
                    </div>
                    {/* Second Row */}
                    <div class={styles.row}>
                        <div class={styles.column}>
                            <h2>E-MAIL*</h2>
                            <input
                                class={styles.input}
                                placeholder="E-Mail eingeben"
                            />
                        </div>
                        <div class={styles.column}>
                            <h2>TELEFONNUMMER*</h2>
                            <input
                                class={styles.input}
                                placeholder="Telefonnummer eingeben"
                            />
                        </div>
                    </div>
                    {/* Third Row */}
                    <div class={styles.row}>
                        <div class={styles.column}>
                            <h2>STRASSE*</h2>
                            <input
                                class={styles.input}
                                placeholder="Strasse eingeben"
                            />
                        </div>
                        <div class={styles.column}>
                            <h2>HAUSNUMMER*</h2>
                            <input
                                class={styles.input}
                                placeholder="Hausnummer eingeben"
                            />
                        </div>
                    </div>
                    {/* Fourth Row */}
                    <div class={styles.row}>
                        <div class={styles.column}>
                            <h2>POSTLEITZAHL*</h2>
                            <input
                                class={styles.input}
                                placeholder="PLZ eingeben"
                            />
                        </div>
                        <div class={styles.column}>
                            <h2>STADT*</h2>
                            <input
                                class={styles.input}
                                placeholder="Stadt eingeben"
                            />
                        </div>
                    </div>
                    {/* Fifth Row */}
                    <div class={styles.row}>
                        <div class={styles.textAreaContainer}>
                            <h2>PERSÖNLICHE NACHRICHT ODER FRAGEN?</h2>
                            <textarea
                                class={styles.textArea}
                                id="w3review"
                                name="w3review"
                                rows="4"
                                cols="50"
                                placeholder="Wir bearbeiten Ihre Anfrage und melden uns bei Ihnen."
                            ></textarea>
                        </div>
                    </div>
                    {/* Button  Row */}
                    <div class={styles.buttonContainer}>
                        <button
                            onClick={() => setStep(1)}
                            class={styles.backButton}
                        >
                            ZURÜCK
                        </button>
                        <button
                            onClick={() => setStep(3)}
                            class={styles.forwardButton}
                        >
                            WEITER ZU SCHRITT 3 VON 3
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutStepTwo;
