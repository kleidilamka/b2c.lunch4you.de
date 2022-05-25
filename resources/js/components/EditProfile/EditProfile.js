import React from "react";
import styles from "./EditProfile.module.scss";

const EditProfile = () => {
    return (
        <div class={styles.wrapper}>
            <div class={styles.editProfile}>
                <h2 class={styles.profileTitle}>DEINE PROFILDATEN</h2>
                <hr />
                <div class={styles.inputContainers}>
                    <div class={styles.col}>
                        <h2 class={styles.label}>VORNAME</h2>
                        <input class={styles.input} placeholder="Sebastian" />
                        <h2 class={styles.label}>E-MAIL</h2>
                        <input
                            class={styles.input}
                            placeholder="Sebastian@gmx.net"
                        />
                        <h2 class={styles.label}>GEBURTSDATUM</h2>
                        <input class={styles.input} placeholder="01.01.1980" />
                    </div>
                    <div class={styles.col}>
                        <h2 class={styles.label}>NACHNAME</h2>
                        <input class={styles.input} placeholder="Mustermann" />
                        <h2 class={styles.label}>TELEFONNUMMER</h2>
                        <input
                            class={styles.input}
                            placeholder="0179 24567890"
                        />
                    </div>
                </div>
                <hr />
                <div class={styles.buttonContainer}>
                    <button class={styles.backButton}>ABBRECHEN</button>
                    <button class={styles.forwardButton}>SPEICHERN</button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
