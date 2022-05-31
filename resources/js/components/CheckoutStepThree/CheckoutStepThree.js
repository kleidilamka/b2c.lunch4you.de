import React from "react";
import styles from "./CheckoutStepThree.module.scss";
import Payments from "../../assets/payments.png";

const CheckoutStepThree = ({ setStep }) => {
    return (
        <div class={styles.root}>
            <h2 class={`${styles.bigTitle} ${styles.font}`}>
                STEP 1 VON 3: WARENKORB BESTELLÜBERSICHT
            </h2>
            <div class={styles.container}>
                <hr />
                <h2 class={`${styles.mainTitle} ${styles.font}`}>
                    BITTE ÜBERPRÜFE DEINE ANGABEN.
                </h2>
                {/* First Row */}
                <div class={styles.row}>
                    <h2 class={`${styles.title} ${styles.font}`}>
                        LIEFERADRESSE
                    </h2>
                    <h2 class={`${styles.orangeText} ${styles.font}`}>
                        Angaben ändern?
                    </h2>
                </div>
                <h2 class={`${styles.text} ${styles.font}`}>
                    Frau Maxi Mustermann
                </h2>
                <h2 class={`${styles.text} ${styles.font}`}>Musterstrasse 1</h2>
                <h2
                    class={`${styles.text} ${styles.font}`}
                    style={{ marginBottom: 24 }}
                >
                    12345 Musterhausen
                </h2>
                {/* Second Row */}
                <hr />
                <div class={styles.row}>
                    <h2 class={`${styles.title} ${styles.font}`}>
                        RECHNUNGSDRESSE
                    </h2>
                    <h2 class={`${styles.orangeText} ${styles.font}`}>
                        Angaben ändern?
                    </h2>
                </div>
                <h2 class={`${styles.text} ${styles.font}`}>
                    Frau Maxi Mustermann
                </h2>
                <h2 class={`${styles.text} ${styles.font}`}>Musterstrasse 1</h2>
                <h2
                    class={`${styles.text} ${styles.font}`}
                    style={{ marginBottom: 24 }}
                >
                    12345 Musterhausen
                </h2>
                {/* Third Row */}
                <hr />
                <div class={styles.row}>
                    <h2 class={`${styles.title} ${styles.font}`}>
                        WARENKORBÜBERSICHT
                    </h2>
                    <h2 class={`${styles.orangeText} ${styles.font}`}>
                        Angaben ändern?
                    </h2>
                </div>
                <div class={styles.row}>
                    <h2 class={`${styles.text} ${styles.font}`}>Thai Curry</h2>
                    <h2 class={`${styles.text} ${styles.font}`}>€ 17.00</h2>
                </div>
                <div class={styles.row}>
                    <h2 class={`${styles.text} ${styles.font}`}>Thai Curry</h2>
                    <h2 class={`${styles.text} ${styles.font}`}>€ 17.00</h2>
                </div>
                <div class={styles.row}>
                    <h2 class={`${styles.text} ${styles.font}`}>Thai Curry</h2>
                    <h2 class={`${styles.text} ${styles.font}`}>€ 17.00</h2>
                </div>
                {/* Fourth Row */}
                <hr />
                <div class={styles.row}>
                    <h2 class={`${styles.text} ${styles.font}`}>
                        Zwischensumme
                    </h2>
                    <h2 class={`${styles.text} ${styles.font}`}>€ 51.00 </h2>
                </div>
                <div class={styles.row}>
                    <h2 class={`${styles.text} ${styles.font}`}>
                        Versandkosten
                    </h2>
                    <h2 class={`${styles.text} ${styles.font}`}>€ 4.99</h2>
                </div>
                <div class={styles.row}>
                    <h2 class={`${styles.text} ${styles.font}`}>
                        Rabatt Gutschein{" "}
                    </h2>
                    <h2 class={`${styles.text} ${styles.font}`}>-€ 5,00 </h2>
                </div>
                <div class={styles.row}>
                    <h2 class={`${styles.orangeText} ${styles.font}`}>
                        Gesamt
                    </h2>
                    <h2 class={`${styles.text} ${styles.font}`}>€ 50.99</h2>
                </div>
                {/* Fifth Row */}
                <hr />
                <div class={styles.row}>
                    <h2 class={`${styles.title} ${styles.font}`}>
                        GUTSCHEINCODE
                    </h2>
                    <input
                        class={styles.input}
                        placeholder="Gutscheincode eingeben"
                    />
                </div>
                {/* Sixth Row */}
                <hr />
                <div class={styles.row}>
                    <h2 class={`${styles.title} ${styles.font}`}>
                        WUNSCHLIEFERDATUM
                    </h2>
                    <h2 class={`${styles.orangeText} ${styles.font}`}>
                        Lieferdatum ändern?
                    </h2>
                </div>
                <div class={styles.row}>
                    <div style={{ width: "50%" }}>
                        <h2 class={`${styles.text} ${styles.font}`}>
                            Donnerstag, 17. November 2021, ca. 9.00 Uhr
                        </h2>
                        <h2 class={`${styles.text} ${styles.font}`}>
                            In einigen Fällen kann es durch
                            Lieferschwierigkeiten des Paketdienstleisters zu
                            Verzögerungen kommen
                        </h2>
                    </div>
                    <h2></h2>
                </div>
                {/* Seventh Row */}
                <hr />
                <h2
                    class={`${styles.title} ${styles.font}`}
                    style={{ marginTop: 20 }}
                >
                    VERSANDART
                </h2>
                <div class={styles.row}>
                    <h2 class={`${styles.text} ${styles.font}`}>UPS</h2>
                    <h2 class={`${styles.text} ${styles.font}`}>€ 4,99</h2>
                </div>
                <h2 class={`${styles.title} ${styles.font}`}>
                    LIEFERUNG DEINER BESTELLUNG
                </h2>
                <h2
                    class={`${styles.text} ${styles.font}`}
                    style={{ marginBottom: 20 }}
                >
                    Wir liefern deutschlandweit mit UPS express. In der Regel
                    versenden wir montags bis donnerstags. Bei Versand mit
                    Wunschtermin berücksichtigen wir die durchschnittliche
                    Versandzeit der Post. Eine Garantie für die Einhaltung des
                    Wunschtermin können wir nicht geben. Die Zustellung unserer
                    Pakete erfolgt somit im Normalfall in 24 Stunden, in Ausnah-
                    mefällen kann es 48 Stunden dauern. In dieser Zeit ist die
                    Kühlkette durch das innovative und umweltfreundliche
                    Versand- system gesichert.
                </h2>
                {/* Eight Row */}
                <hr />
                <h2
                    class={`${styles.title} ${styles.font}`}
                    style={{ marginTop: 20 }}
                >
                    DEINE MÖGLICHKEITEN DER ZAHLUNG
                </h2>
                <img src={Payments} class={styles.image} />
                {/* Ninth Row */}
                <hr />
                <h2
                    class={`${styles.title} ${styles.font}`}
                    style={{ marginTop: 20 }}
                >
                    RÜCKSENDUNG EISPACKS
                </h2>
                <div class={styles.row}>
                    <h2 class={`${styles.rucksendText} ${styles.font}`}>
                        Ab einer Menge von 6 Eispacks können Sie uns diese
                        zurück senden.
                    </h2>
                    <div style={{ borderWidth: 1, borderColor: "blue" }}>
                        <input type="checkbox" id="scales" name="scales" />
                        <label
                            class={`${styles.rucksendText} ${styles.font}`}
                            style={{ marginLeft: 5 }}
                            for="scales"
                        >
                            Rücksendeschein anforden
                        </label>
                    </div>
                </div>
                {/* Tenth Row */}
                <hr />
                <div class={styles.checkbox}>
                    <input type="checkbox" id="scales" name="scales" />
                    <label class={styles.label} for="scales">
                        Ich habe die{" "}
                        <span style={{ color: "#f89b1b" }}>
                            Datenschutzerklärung{" "}
                        </span>
                        gelesen und erkläre mich damit einverstanden, dass meine
                        Daten elektronisch verarbeitet und gespeichert werden.
                    </label>
                </div>
                <div class={styles.checkbox}>
                    <input type="checkbox" id="scales" name="scales" />
                    <label class={styles.label} for="scales">
                        Ich habe die{" "}
                        <span style={{ color: "#f89b1b" }}>AGB </span> gelesen
                        und erkläre mich mit diesen einverstanden.
                    </label>
                </div>
                {/* Tenth Row */}
                {/* Button  Row */}
                <hr />
                <div class={styles.row}>
                    <button
                        onClick={() => setStep(2)}
                        class={`${styles.backButton} ${styles.font}`}
                    >
                        ZURÜCK
                    </button>
                    <button
                        onClick={() => setStep(4)}
                        class={`${styles.forwardButton} ${styles.font}`}
                        style={{ width: 400 }}
                    >
                        BESTELLUNG ABSENDEN UND BEZAHLEN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutStepThree;
