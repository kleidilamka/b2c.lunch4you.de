import React from "react";
import styles from "./ClientOrders.module.scss";

const ClientOrders = () => {
    return (
        <div class={styles.wrapper}>
            <div class={styles.editProfile}>
                <h2 class={`${styles.profileTitle} ${styles.font}`}>
                    DEINE PROFILDATEN{" "}
                </h2>
                <hr />
                {Array.apply(null, { length: 5 }).map((e, i) => (
                    <div class={styles.orderContainer}>
                        <h2 class={`${styles.orderTitle} ${styles.font}`}>
                            DI, 21.05.2021, BESTELLNUMMER: 5217HT13
                        </h2>
                        <div class={styles.orderDetails}>
                            <h4 class={`${styles.text} ${styles.font}`}>
                                Thai Curry
                            </h4>
                            <h4 class={`${styles.text} ${styles.font}`}>
                                € 17.00{" "}
                            </h4>
                        </div>
                        <div class={styles.orderDetails}>
                            <h4 class={`${styles.text} ${styles.font}`}>
                                Thai Curry
                            </h4>
                            <h4 class={`${styles.text} ${styles.font}`}>
                                € 17.00{" "}
                            </h4>
                        </div>
                        <div class={styles.orderDetails}>
                            <h4 class={`${styles.text} ${styles.font}`}>
                                Thai Curry
                            </h4>
                            <h4 class={`${styles.text} ${styles.font}`}>
                                € 17.00{" "}
                            </h4>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientOrders;
