import React from "react";
import styles from "./Blog.module.scss";
import Food from "../../assets/foodBackground.jpeg";
import CookersBackground from "../../assets/cookersBackground.jpeg";
import LongImage from "../../assets/longImage.png";

const Blog = () => {
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
            <div class={styles.ctgContainer}>
                <h2 style={{ left: 18, top: 18, position: "absolute" }}>
                    Kategorien
                </h2>
                {Array.apply(null, { length: 5 }).map((e, i) => (
                    <div class={styles.ctg}>
                        <input type="checkbox" />
                        <label style={{ marginLeft: 10 }}>Zutaten</label>
                    </div>
                ))}
            </div>
            <div class={styles.bottomContainer}>
                <div class={styles.blogsPostsContainer}>
                    <div class={styles.blogPost}>
                        <img src={Food} class={styles.blogImage} />
                        <div class={styles.blogPostBottomContainer}>
                            <h2 style={{ marginTop: 12 }}>ARTIKEL 01</h2>
                            <h4 class={styles.text}>vendis et venimus</h4>
                            <h4 class={styles.text}>
                                Sed quid enim dolupta tatiat et mo vent alitatem
                                utem asperias re eos num sae vendis et alita-
                                tem utem alitatem venimus.
                            </h4>
                        </div>
                        <div class={styles.blogInfoContainer}>
                            <h4>By Admin</h4>
                            <h4>3 Kommentare</h4>
                        </div>
                    </div>
                    <div class={styles.blogPost}>
                        <img src={LongImage} class={styles.blogImage} />
                        <div class={styles.blogPostBottomContainer}>
                            <h2 style={{ marginTop: 12 }}>ARTIKEL 01</h2>
                            <h4 class={styles.text}>vendis et venimus</h4>
                            <h4 class={styles.text}>
                                Sed quid enim dolupta tatiat et mo vent alitatem
                                utem asperias re eos num sae vendis et alita-
                                tem utem alitatem venimus.
                            </h4>
                        </div>
                        <div class={styles.blogInfoContainer}>
                            <h4>By Admin</h4>
                            <h4>3 Kommentare</h4>
                        </div>
                    </div>
                    <div class={styles.blogPost}>
                        <img src={CookersBackground} class={styles.blogImage} />
                        <div class={styles.blogPostBottomContainer}>
                            <h2 style={{ marginTop: 12 }}>ARTIKEL 01</h2>
                            <h4 class={styles.text}>vendis et venimus</h4>
                            <h4 class={styles.text}>
                                Sed quid enim dolupta tatiat et mo vent alitatem
                                utem asperias re eos num sae vendis et alita-
                                tem utem alitatem venimus.
                            </h4>
                        </div>
                        <div class={styles.blogInfoContainer}>
                            <h4>By Admin</h4>
                            <h4>3 Kommentare</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// {Array.apply(null, { length: 5 }).map((e, i) => (

// ))}

export default Blog;
