import React from "react";
import FarmBackground from "../../assets/farmBackground.jpeg";
import styles from "./Lieferanten.module.scss";

const Lieferanten = () => {
    return (
        <div class={styles.root}>
            <div
                class={styles.bgImage}
                style={{
                    backgroundImage: `url("${FarmBackground}")`,
                }}
            ></div>
            <div class={styles.container}>
                <h2 class={`${styles.text} ${styles.font}`}>
                    UNSERE LIEFERANTEN.
                </h2>
                <h2 class={`${styles.title} ${styles.font}`}>
                    REGIONALE ERZEUGUNG & KURZE LIEFERWEGE.
                </h2>
                <h4
                    class={`${styles.description} ${styles.font}`}
                    style={{ width: "80%" }}
                >
                    Occum aut quatemquo quia num int officat empostrum quidem
                    venihic iandaer namenis estrum quodis dolore sumquaectur
                    anditat emporitatet ipsum dolup- taquo temquis exerovit
                    laborep udaecti incient voluptius escil incia vene pro
                    omnistiae dolorerrum et laut dolorestrum as que voluptatur
                    aut atiaept iberum etus sum sunt lit el molorecae. Latiam
                    audisque voluptae volum faccum laut et ium que nient volupta
                    tumene nemporum labor repedis es et ma vel et eturissint
                    ducit etur autam rem int re parciatquis est volesedipsam non
                    commoluptat vel molupit laut qui quaerchil molum, sus
                    aliaturis ea dolupta volut et accum reici- maxim qui
                    ditioritas demoluptat.
                </h4>
            </div>
        </div>
    );
};

export default Lieferanten;
