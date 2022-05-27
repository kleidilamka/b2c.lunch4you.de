import React from "react";
import styles from "./EditPassword.module.scss";

const EditPassword = () => {
    return (
        <div class={styles.wrapper}>
            <div class={`${styles.editProfile} ${styles.font}`}>
                <h2 class={styles.profileTitle}>DEIN PASSWORT ÄNDERN</h2>
                <hr />
                <div class={styles.inputContainers}>
                    <div class={styles.col}>
                        <h2 class={`${styles.label} ${styles.font}`}>
                            AKTUELLES PASSWORT
                        </h2>
                        <input
                            class={styles.passwordInput}
                            placeholder="•••••••••••••••"
                        />
                    </div>
                    <div class={styles.col} style={{ marginRight: 20 }}>
                        <h2 class={`${styles.label} ${styles.font}`}>
                            NEUES PASSWORT
                        </h2>
                        <input class={styles.input} placeholder="Mustermann" />
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

export default EditPassword;
