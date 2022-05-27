import React from "react";
import styles from "./BonusPoints.module.scss";

const BonusPoints = () => {
    return (
        <div class={styles.wrapper}>
            <div class={styles.editProfile}>
                <h2 class={`${styles.profileTitle} ${styles.font}`}>
                    DEINE BONUSPUNKTE
                </h2>
                <hr />
                <div>
                    <h4 class={`${styles.title} ${styles.font}`}>
                        Pro bestelltem Menü erhälst Du einen Bonus-Coin.
                    </h4>
                    <h4 class={`${styles.title} ${styles.font}`}>
                        Für 15 gesammelte Bonus-Coins erhälst Du ein Gratis-Menü
                        Deiner Wahl.
                    </h4>
                </div>
                <div>
                    <div class={styles.row}>
                        <h2 class={`${styles.orangeText} ${styles.font}`}>
                            BONUS-COINS
                        </h2>
                        <h2 class={`${styles.orangeText} ${styles.font}`}>
                            {" "}
                            11
                        </h2>
                    </div>
                    <div class={styles.row}>
                        <h4
                            class={`${styles.title} ${styles.font}`}
                            style={{ fontWeight: 500 }}
                        >
                            Fehlende Bonus-Coins für Dein nächstes Gratis-Menü
                        </h4>
                        <h4
                            class={`${styles.title} ${styles.font}`}
                            style={{ fontWeight: 500 }}
                        >
                            4
                        </h4>
                    </div>
                </div>

                <hr />
            </div>
        </div>
    );
};

export default BonusPoints;
