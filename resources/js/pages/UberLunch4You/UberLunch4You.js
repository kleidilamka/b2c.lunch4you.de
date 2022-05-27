import React from "react";
import styles from "./UberLunch4You.module.scss";

const UberLunch4You = () => {
    return (
        <div class={styles.root}>
            <div class={styles.container}>
                <h2 class={`${styles.text} ${styles.font}`}>
                    FÜR JEDEN ETWAS DABEI.
                </h2>
                <h2 class={`${styles.title} ${styles.font}`}>
                    VERSCHENKEN SIE KULINARISCHE VIELFALT.
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
                    ditioritas demoluptat
                </h4>
            </div>
            <h2
                class={styles.font}
                style={{
                    color: "#F89B1B",
                    fontSize: 60,
                    marginTop: 48,
                    alignSelf: "center",
                }}
            >
                GUTSCHEIN BESTELLEN
            </h2>
            <h2
                class={styles.font}
                style={{ fontSize: 48, marginTop: 12, marginBottom: 24 }}
            >
                WUNSCHMOTIV WÄHLEN
            </h2>
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
                            <h2 class={styles.font} style={{ fontSize: 36 }}>
                                MOTIV 1
                            </h2>
                        </div>
                        <input type="checkbox" />
                    </div>
                ))}
            </div>
            <div class={styles.textFieldsContainer}>
                <div class={styles.column}>
                    <div class={styles.inputContainer}>
                        <h2 class={`${styles.label} ${styles.font}`}>
                            VORNAME*
                        </h2>
                        <input
                            class={styles.input}
                            placeholder="Vornamen eingeben"
                        />
                    </div>
                    <div class={styles.inputContainer}>
                        <h2 class={`${styles.label} ${styles.font}`}>
                            E-MAIL*
                        </h2>
                        <input
                            class={styles.input}
                            placeholder="E-Mail eingeben"
                        />
                    </div>
                    <div class={styles.inputContainer}>
                        <h2 class={`${styles.label} ${styles.font}`}>
                            STRASSE*
                        </h2>
                        <input
                            class={styles.input}
                            placeholder="Strasse eingeben"
                        />
                    </div>
                    <div class={styles.inputContainer}>
                        <h2 class={`${styles.label} ${styles.font}`}>
                            POSTLEITZAHL*
                        </h2>
                        <input
                            class={styles.input}
                            placeholder="PLZ eingeben"
                        />
                    </div>
                    <div class={styles.inputContainer}>
                        <h2 class={`${styles.label} ${styles.font}`}>
                            GUTSCHEIN WERT €*
                        </h2>
                        <input class={styles.input} placeholder="0,00" />
                    </div>
                </div>
                <div class={styles.column}>
                    <div class={styles.inputContainer}>
                        <h2 class={`${styles.label} ${styles.font}`}>
                            NACHNAME*
                        </h2>
                        <input
                            class={styles.input}
                            placeholder="Nachnamen eingeben"
                        />
                    </div>
                    <div class={styles.inputContainer}>
                        <h2 class={`${styles.label} ${styles.font}`}>
                            TELEFONNUMMER*
                        </h2>
                        <input
                            class={styles.input}
                            placeholder="Telefonnummer eingeben"
                        />
                    </div>
                    <div class={styles.inputContainer}>
                        <h2 class={`${styles.label} ${styles.font}`}>
                            HAUSNUMMER*
                        </h2>
                        <input
                            class={styles.input}
                            placeholder="Hausnummer eingeben"
                        />
                    </div>
                    <div class={styles.inputContainer}>
                        <h2 class={`${styles.label} ${styles.font}`}>STADT*</h2>
                        <input
                            class={styles.input}
                            placeholder="Stadt eingeben"
                        />
                    </div>
                </div>
            </div>
            <div class={styles.line} />

            <div class={styles.buttonsContainer}>
                <button class={`${styles.backButton} ${styles.font}`}>
                    ZURÜCK
                </button>
                <button class={`${styles.forwardButton} ${styles.font}`}>
                    WEITER ZUR BEZAHLUNG
                </button>
            </div>
        </div>
    );
};

export default UberLunch4You;
