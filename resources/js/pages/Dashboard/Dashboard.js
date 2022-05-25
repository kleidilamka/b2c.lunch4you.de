import React from "react";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
    return (
        <div class={styles.root}>
            <h2 class={styles.title}>WILLKOMMEN IN DEINEM KUNDENKONTO.</h2>
            <h2 class={styles.bigTitle}>HALLO SEBASTIAN.</h2>
            <div class={styles.container}>
                <div class={styles.sidebar}>
                    <div class={styles.menuItem}>
                        <h2 class={styles.sidebarTitle}>PROFIL</h2>
                    </div>
                    <div class={styles.menuItem}>
                        <h2 class={styles.sidebarTitle}>KONTAKDATEN</h2>
                    </div>
                    <div class={styles.menuItem}>
                        <h2 class={styles.sidebarTitle}>PASSWORT</h2>
                    </div>
                    <div class={styles.menuItem}>
                        <h2 class={styles.sidebarTitle}>MEINE BESTELLUNGEN </h2>
                    </div>
                    <div class={styles.menuItem}>
                        <h2 class={styles.sidebarTitle}>BONUSPUNKTE</h2>
                    </div>
                </div>
                <div class={styles.wrapper}>
                    <div class={styles.editProfile}>
                        <h2 class={styles.profileTitle}>DEINE PROFILDATEN</h2>
                        <hr />
                        <div class={styles.inputContainers}>
                            <div class={styles.col}>
                                <h2 class={styles.label}>VORNAME</h2>
                                <input
                                    class={styles.input}
                                    placeholder="Sebastian"
                                />
                                <h2 class={styles.label}>E-MAIL</h2>
                                <input
                                    class={styles.input}
                                    placeholder="Sebastian@gmx.net"
                                />
                                <h2 class={styles.label}>GEBURTSDATUM</h2>
                                <input
                                    class={styles.input}
                                    placeholder="01.01.1980"
                                />
                            </div>
                            <div class={styles.col}>
                                <h2 class={styles.label}>NACHNAME</h2>
                                <input
                                    class={styles.input}
                                    placeholder="Mustermann"
                                />
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
                            <button class={styles.forwardButton}>
                                SPEICHERN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
