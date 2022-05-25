import React from "react";
import styles from "./UberLunch4You.module.scss";

const UberLunch4You = () => {
    return (
        <div class={styles.root}>
            <div class={styles.container}>
                <h2 class={styles.text}>WICHTIG ZU WISSEN.</h2>
                <h2 class={styles.title}>ANTWORTEN AUF VIELE FRAGEN.</h2>
                <h4 style={{ width: "80%", fontSize: 24 }}>
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
                    ditioritas demoluptat
                </h4>
            </div>
            <h2>GUTSCHEIN BESTELLEN</h2>
            <h2>WUNSCHMOTIV WÄHLEN</h2>
            <div class={styles.motiveContainer}>
                {Array.apply(null, { length: 3 }).map((e, i) => (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                            alignItems: "center",
                        }}
                    >
                        <div class={styles.motive}>
                            <h2>MOTIV 1</h2>
                        </div>
                        <input type="checkbox" />
                    </div>
                ))}
            </div>
            <div class={styles.textFieldsContainer}>
                <div class={styles.column}>
                    <div class={styles.inputContainer}>
                        <h2>VORNAME*</h2>
                        <input
                            class={styles.input}
                            placeholder="Vornamen eingeben"
                        />
                    </div>
                    <div class={styles.inputContainer}>
                        <h2>E-MAIL*</h2>
                        <input
                            class={styles.input}
                            placeholder="E-Mail eingeben"
                        />
                    </div>
                    <div class={styles.inputContainer}>
                        <h2>STRASSE*</h2>
                        <input
                            class={styles.input}
                            placeholder="Strasse eingeben"
                        />
                    </div>
                    <div class={styles.inputContainer}>
                        <h2>POSTLEITZAHL*</h2>
                        <input
                            class={styles.input}
                            placeholder="PLZ eingeben"
                        />
                    </div>
                    <div class={styles.inputContainer}>
                        <h2>GUTSCHEIN WERT €*</h2>
                        <input class={styles.input} placeholder="0,00" />
                    </div>
                </div>
                <div class={styles.column}>
                    <div class={styles.inputContainer}>
                        <h2>NACHNAME*</h2>
                        <input
                            class={styles.input}
                            placeholder="Nachnamen eingeben"
                        />
                    </div>
                    <div class={styles.inputContainer}>
                        <h2>TELEFONNUMMER*</h2>
                        <input
                            class={styles.input}
                            placeholder="Telefonnummer eingeben"
                        />
                    </div>
                    <div class={styles.inputContainer}>
                        <h2>HAUSNUMMER*</h2>
                        <input
                            class={styles.input}
                            placeholder="Hausnummer eingeben"
                        />
                    </div>
                    <div class={styles.inputContainer}>
                        <h2>STADT*</h2>
                        <input
                            class={styles.input}
                            placeholder="Stadt eingeben"
                        />
                    </div>
                </div>
            </div>
            <div class={styles.line} />

            <div class={styles.buttonsContainer}>
                <button class={styles.backButton}>ZURÜCK</button>
                <button class={styles.forwardButton}>
                    WEITER ZUR BEZAHLUNG
                </button>
            </div>
        </div>
    );
};

export default UberLunch4You;
