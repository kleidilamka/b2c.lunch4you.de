import React from "react";
import styles from "./EditContactData.module.scss";

const EditContactData = () => {
    return (
        <div class={styles.wrapper}>
            <div class={styles.editProfile}>
                <h2 class={`${styles.profileTitle} ${styles.font}`}>
                    DEINE PROFILDATEN
                </h2>
                <hr />
                <div class={styles.inputContainers}>
                    <div class={styles.col}>
                        <h2 class={`${styles.label} ${styles.font}`}>
                            STRASSE
                        </h2>
                        <input
                            class={styles.input}
                            placeholder="Musterstrasse"
                        />
                        <h2 class={`${styles.label} ${styles.font}`}>
                            POSTLEITZAHL
                        </h2>
                        <input class={styles.input} placeholder="12345" />
                    </div>
                    <div class={styles.col} style={{ marginRight: 20 }}>
                        <h2 class={`${styles.label} ${styles.font}`}>
                            HAUSNUMMER
                        </h2>
                        <input class={styles.input} placeholder="1" />
                        <h2 class={`${styles.label} ${styles.font}`}>STADT</h2>
                        <input
                            class={styles.input}
                            placeholder="Musterhausen"
                        />
                    </div>
                </div>
                <hr />
                <div class={styles.buttonContainer}>
                    <button class={`${styles.backButton} ${styles.font}`}>
                        ABBRECHEN
                    </button>
                    <button class={`${styles.forwardButton} ${styles.font}`}>
                        SPEICHERN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditContactData;
