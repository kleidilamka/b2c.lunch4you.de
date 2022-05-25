import React from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
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
    );
};

export default Sidebar;
