import React from "react";
import styles from "./BonusPoints.module.scss";

const BonusPoints = () => {
    return (
        <div class={styles.wrapper}>
            <div class={styles.editProfile}>
                <h2 class={styles.profileTitle}>DEINE BONUSPUNKTE</h2>
                <hr />
                <div>
                    <h4 class={styles.title}>
                        Pro bestelltem Menü erhälst Du einen Bonus-Coin.
                    </h4>
                    <h4 class={styles.title}>
                        Für 15 gesammelte Bonus-Coins erhälst Du ein Gratis-Menü
                        Deiner Wahl.
                    </h4>
                </div>
                <div>
                    <div class={styles.row}>
                        <h2 class={styles.orangeText}>BONUS-COINS</h2>
                        <h2 class={styles.orangeText}> 11</h2>
                    </div>
                    <div class={styles.row}>
                        <h4 class={styles.title}>
                            Fehlende Bonus-Coins für Dein nächstes Gratis-Menü
                        </h4>
                        <h4 class={styles.title}>4</h4>
                    </div>
                </div>

                <hr />
            </div>
        </div>
    );
};

export default BonusPoints;
