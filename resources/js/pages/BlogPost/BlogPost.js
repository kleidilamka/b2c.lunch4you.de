import React, { useState } from "react";
import styles from "./BlogPost.module.scss";
import Food from "../../assets/foodBackground.jpeg";

const BlogPost = () => {
    const [openCommentInput, setOpenCommentInput] = useState(false);

    return (
        <div class={styles.root}>
            <div class={styles.container}>
                <h2 class={styles.text}>UNSER BLOG.</h2>
                <h2 class={styles.title}>AKTUELLES RUND UM LUNCH4YOU.</h2>
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
                    ditioritas demoluptat.
                </h4>
            </div>
            <div class={styles.postContainer}>
                <img src={Food} class={styles.image} />
                <div class={styles.articleContainer}>
                    <h2>ARTIKEL 03</h2>
                    <h2 class={styles.articleText}>
                        vendis et venimu, 04.08.2020
                    </h2>
                    <h4 class={styles.articleText}>
                        Sed quid enim dolupta tatiat et mo vent alitatem utem
                        asperias re eos num sae vendis et alitatem utem alitatem
                        venimus. Sed quid enim dolupta tatiat et mo vent
                        alitatem utem asperias re eos num sae vendis et alitatem
                        utem alitatem venimus. Sed quid enim dolupta tatiat et
                        mo vent alitatem utem asperias re eos num sae vendis et
                        ali- tatem utem alitatem venimus. Sed quid enim dolupta
                        tatiat et mo vent alitatem utem asperias re eos num sae
                        vendis et alitatem utem alitatem venimus. Sed quid enim
                        dolupta tatiat et mo vent alitatem utem asperias re eos
                        num sae vendis et alitatem utem alitatem venimus. Sed
                        quid enim dolupta tatiat et mo vent alitatem utem aspe-
                        rias re eos num sae vendis et alitatem utem alitatem
                        venimus. Sed quid enim dolupta tatiat et mo vent
                        alitatem utem asperias re eos num sae vendis et alitatem
                        utem alitatem venimus. Sed quid enim dolupta tatiat et
                        mo vent alitatem utem asperias re eos num sae vendis et
                        alitatem utem alitatem venimus. Sed quid enim dolupta
                        tatiat et mo vent alitatem utem asperias re eos num sae
                        vendis et alitatem utem alitatem venimus. Sed quid enim
                        dolup- ta tatiat et mo vent alitatem utem asperias re
                        eos num sae vendis et alitatem utem alitatem venimus.
                        Sed quid enim dolupta tatiat et mo vent alitatem utem
                        asperias re eos num sae vendis et alitatem utem alitatem
                        venimus. Sed quid enim dolupta tatiat et mo vent
                        alitatem utem asperias re eos num sae vendis et alitatem
                        utem alitatem venimus. Sed quid enim dolupta tatiat et
                        mo vent alitatem utem asperias re eos num sae vendis et
                        alitatem utem alitatem venimus.
                    </h4>
                    <h4
                        class={styles.articleText}
                        style={{ fontWeight: "bold" }}
                    >
                        By Admin
                    </h4>
                </div>
            </div>

            <div class={styles.commentsContainer}>
                <div class={styles.commentWrapper}>
                    <h2>ARTIKEL 03</h2>
                    <h2 class={styles.articleText}>
                        vendis et venimu, 04.08.2020
                    </h2>
                    <h2
                        style={{
                            fontSize: 24,
                            fontWeight: 400,
                            color: "#4B4C4C",
                        }}
                    >
                        Antworten
                    </h2>
                    {/* Comments */}
                    {Array.apply(null, { length: 2 }).map((e, i) => (
                        <div>
                            <h4 class={styles.articleText}>
                                Name, 21.07.2021: Sed quid enim dolupta tatiat
                                enim dolupta tatiat et mo vent enim dolupta
                                tatiat et mo vent enim dolupta tatiat et mo vent
                                et mo vent alitatem utem asperias re eos num sae
                                vendis et alitatem utem alitatem venimus.
                            </h4>
                            {/* Open Reply Container */}
                            <button
                                onClick={() => setOpenCommentInput(true)}
                                class={styles.antwortenButton}
                                style={{
                                    color: openCommentInput
                                        ? "#f89b1b"
                                        : "black",
                                }}
                            >
                                Antworten
                            </button>
                            {/* Reply Input Container */}
                            {openCommentInput && (
                                <div class={styles.commentInputContainer}>
                                    <div class={styles.bigInputContainer}>
                                        <textarea
                                            placeholder="Antwort schreiben."
                                            class={styles.textArea}
                                        ></textarea>
                                    </div>
                                    <div class={styles.inputContainer}>
                                        <input
                                            class={styles.input}
                                            placeholder="Name eingeben"
                                        />
                                        <input
                                            class={styles.input}
                                            placeholder="E-Mail-Adresse  eingeben"
                                        />
                                    </div>
                                    <div class={styles.inputContainer}>
                                        <button
                                            onClick={() =>
                                                setOpenCommentInput(false)
                                            }
                                            class={styles.button}
                                            style={{
                                                backgroundColor: "#ea4c46",
                                                opacity: 0.9,
                                            }}
                                        >
                                            ABBRECHEN
                                        </button>
                                        <button
                                            class={styles.button}
                                            style={{
                                                backgroundColor: "#f89b1b",
                                            }}
                                        >
                                            ANTWORT SENDEN
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    {/* New Comment Container */}
                    <div class={styles.commentInputContainer}>
                        <h2 style={{ marginBlock: 10 }}>
                            NEUEN KOMMENTAR ERSTELLEN{" "}
                        </h2>
                        <div class={styles.inputContainer}>
                            <div class={styles.newCommentInputContainer}>
                                <h2 style={{ marginBlock: 10 }}>NAME*</h2>
                                <input
                                    class={styles.newCommentInput}
                                    placeholder="Name eingeben"
                                />
                            </div>
                            <div class={styles.newCommentInputContainer}>
                                <h2 style={{ marginLeft: 12, marginBlock: 10 }}>
                                    E-MAIL-ADRESSE*
                                </h2>
                                <input
                                    style={{ marginLeft: 12 }}
                                    class={styles.newCommentInput}
                                    placeholder="E-Mail-Adresse  eingeben"
                                />
                            </div>
                        </div>
                        <div class={styles.bigInputContainer}>
                            <textarea
                                placeholder="Antwort schreiben."
                                class={styles.textArea}
                            ></textarea>
                        </div>
                        <div class={styles.inputContainer}>
                            <button
                                onClick={() => setOpenCommentInput(false)}
                                class={styles.button}
                                style={{
                                    backgroundColor: "#ea4c46",
                                    opacity: 0.9,
                                    height: 70,
                                    width: 200,
                                    fontSize: 24,
                                }}
                            >
                                ABBRECHEN
                            </button>
                            <button
                                class={styles.button}
                                style={{
                                    backgroundColor: "#f89b1b",
                                    height: 70,
                                    width: 300,
                                    fontSize: 24,
                                }}
                            >
                                ANTWORT SENDEN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
