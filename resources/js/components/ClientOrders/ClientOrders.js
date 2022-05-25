import React from "react";
import styles from "./ClientOrders.module.scss";

const ClientOrders = () => {
    return (
        <div class={styles.wrapper}>
            <div class={styles.editProfile}>
                <h2 class={styles.profileTitle}>DEINE PROFILDATEN </h2>
                <hr />
                {Array.apply(null, { length: 7 }).map((e, i) => (
                    <div class={styles.orderContainer}>
                        <h2 class={styles.orderTitle}>
                            DI, 21.05.2021, BESTELLNUMMER: 5217HT13
                        </h2>
                        <div class={styles.orderDetails}>
                            <h4>Thai Curry</h4>
                            <h4>€ 17.00 </h4>
                        </div>
                        <div class={styles.orderDetails}>
                            <h4>Thai Curry</h4>
                            <h4>€ 17.00 </h4>
                        </div>
                        <div class={styles.orderDetails}>
                            <h4>Thai Curry</h4>
                            <h4>€ 17.00 </h4>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientOrders;
