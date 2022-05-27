import React from "react";
import styles from "./EditProfile.module.scss";

const EditProfile = () => {
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
                            VORNAME
                        </h2>
                        <input class={styles.input} placeholder="Sebastian" />
                        <h2 class={`${styles.label} ${styles.font}`}>E-MAIL</h2>
                        <input
                            class={styles.input}
                            placeholder="Sebastian@gmx.net"
                        />
                        <h2 class={`${styles.label} ${styles.font}`}>
                            GEBURTSDATUM
                        </h2>
                        <input class={styles.input} placeholder="01.01.1980" />
                    </div>
                    <div class={styles.col} style={{ marginRight: 20 }}>
                        <h2 class={`${styles.label} ${styles.font}`}>
                            NACHNAME
                        </h2>
                        <input class={styles.input} placeholder="Mustermann" />
                        <h2 class={`${styles.label} ${styles.font}`}>
                            TELEFONNUMMER
                        </h2>
                        <input
                            class={styles.input}
                            placeholder="0179 24567890"
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

export default EditProfile;
