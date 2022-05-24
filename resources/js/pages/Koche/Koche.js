import React from "react";
import FarmBackground from "../../assets/farmBackground.jpeg";
import styles from "./Koche.module.scss";
import CookersBackground from "../../assets/cookersBackground.jpeg";
import Amal from "../../assets/Amal.png";
import Edi from "../../assets/Edi.png";
import Emilio from "../../assets/Emilio.png";
import Jea from "../../assets/Jae.png";
import Nicole from "../../assets/Nicole.png";
import Roland from "../../assets/Roland.png";

const Koche = () => {
    return (
        <div class={styles.root}>
            <div
                class={styles.bgImage}
                style={{
                    backgroundImage: `url("${FarmBackground}")`,
                }}
            ></div>
            <div class={styles.container}>
                <h2 class={styles.text}>UNSERE LIEFERANTEN.</h2>
                <h2 class={styles.title}>
                    REGIONALE ERZEUGUNG & KURZE LIEFERWEGE.
                </h2>
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
            {/* Cookers */}
            <div
                class={styles.cookersBackground}
                style={{
                    backgroundImage: `url("${CookersBackground}")`,
                }}
            >
                <div class={styles.cookersInfoContainer}>
                    <div class={styles.cookersInfo}>
                        <div class={styles.cookers}>
                            <h2 class={styles.title}>
                                UNSERE CHEF-KÖCHE: AMAL
                            </h2>
                            <h2 class={styles.bigTitle}>INDIAN STYLE.</h2>
                            <h4 class={styles.text}>
                                Amal ist 35 und ist schon jung Chefkoch mit
                                Verantwortung geworden. Er arbeitete für
                                verschiedene Catering-Firmen und war sogar mal
                                eine Zeit lang Koch auf einem Kreuzfahrtschiff.
                                Er ist Profi in der internationalen Küche, aber
                                hat auch einen beson- deren Bezug zur indischen
                                Küche, da er mit dieser aufgewachsen ist.
                            </h4>
                            <h4 class={styles.text}>
                                „Wie jeder Koch liebe ich es zu kochen. Noch
                                schöner finde ich es neues auszuprobie- ren.
                                Indische Küche wird oft nicht so gekocht, wie
                                ich das selbst essen würde. Ins- besondere die
                                Menge an Zusatzstoffen, die einfach
                                untergemischt wird, obwohl das gar nicht nötig
                                ist. Deshalb ist es toll für mich, dass wir den
                                Indian Style haben und ich meine Erfahrung und
                                die indische Küche anderen Menschen näherbringen
                                kann. Indische Küche ist vielseitig und gesund,
                                und oft unterschätzt. Ich freue mich, wenn ich
                                viele indische Gerichte für die Leute kochen
                                kann. Leute bestellt indisch!„
                            </h4>
                        </div>
                    </div>

                    <img src={Roland} class={styles.image} />
                </div>
            </div>
            <div
                class={styles.cookersBackground}
                style={{
                    backgroundImage: `url("${CookersBackground}")`,
                }}
            >
                <div class={styles.cookersInfoContainer}>
                    <div class={styles.cookersInfo}>
                        <div class={styles.cookers}>
                            <h2 class={styles.title}>
                                UNSERE CHEF-KÖCHE: AMAL
                            </h2>
                            <h2 class={styles.bigTitle}>INDIAN STYLE.</h2>
                            <h4 class={styles.text}>
                                Amal ist 35 und ist schon jung Chefkoch mit
                                Verantwortung geworden. Er arbeitete für
                                verschiedene Catering-Firmen und war sogar mal
                                eine Zeit lang Koch auf einem Kreuzfahrtschiff.
                                Er ist Profi in der internationalen Küche, aber
                                hat auch einen beson- deren Bezug zur indischen
                                Küche, da er mit dieser aufgewachsen ist.
                            </h4>
                            <h4 class={styles.text}>
                                „Wie jeder Koch liebe ich es zu kochen. Noch
                                schöner finde ich es neues auszuprobie- ren.
                                Indische Küche wird oft nicht so gekocht, wie
                                ich das selbst essen würde. Ins- besondere die
                                Menge an Zusatzstoffen, die einfach
                                untergemischt wird, obwohl das gar nicht nötig
                                ist. Deshalb ist es toll für mich, dass wir den
                                Indian Style haben und ich meine Erfahrung und
                                die indische Küche anderen Menschen näherbringen
                                kann. Indische Küche ist vielseitig und gesund,
                                und oft unterschätzt. Ich freue mich, wenn ich
                                viele indische Gerichte für die Leute kochen
                                kann. Leute bestellt indisch!„
                            </h4>
                        </div>
                    </div>

                    <img src={Amal} class={styles.image} />
                </div>
            </div>
            <div
                class={styles.cookersBackground}
                style={{
                    backgroundImage: `url("${CookersBackground}")`,
                }}
            >
                <div class={styles.cookersInfoContainer}>
                    <div class={styles.cookersInfo}>
                        <div class={styles.cookers}>
                            <h2 class={styles.title}>
                                UNSERE CHEF-KÖCHE: AMAL
                            </h2>
                            <h2 class={styles.bigTitle}>INDIAN STYLE.</h2>
                            <h4 class={styles.text}>
                                Amal ist 35 und ist schon jung Chefkoch mit
                                Verantwortung geworden. Er arbeitete für
                                verschiedene Catering-Firmen und war sogar mal
                                eine Zeit lang Koch auf einem Kreuzfahrtschiff.
                                Er ist Profi in der internationalen Küche, aber
                                hat auch einen beson- deren Bezug zur indischen
                                Küche, da er mit dieser aufgewachsen ist.
                            </h4>
                            <h4 class={styles.text}>
                                „Wie jeder Koch liebe ich es zu kochen. Noch
                                schöner finde ich es neues auszuprobie- ren.
                                Indische Küche wird oft nicht so gekocht, wie
                                ich das selbst essen würde. Ins- besondere die
                                Menge an Zusatzstoffen, die einfach
                                untergemischt wird, obwohl das gar nicht nötig
                                ist. Deshalb ist es toll für mich, dass wir den
                                Indian Style haben und ich meine Erfahrung und
                                die indische Küche anderen Menschen näherbringen
                                kann. Indische Küche ist vielseitig und gesund,
                                und oft unterschätzt. Ich freue mich, wenn ich
                                viele indische Gerichte für die Leute kochen
                                kann. Leute bestellt indisch!„
                            </h4>
                        </div>
                    </div>

                    <img src={Edi} class={styles.image} />
                </div>
            </div>
            <div
                class={styles.cookersBackground}
                style={{
                    backgroundImage: `url("${CookersBackground}")`,
                }}
            >
                <div class={styles.cookersInfoContainer}>
                    <div class={styles.cookersInfo}>
                        <div class={styles.cookers}>
                            <h2 class={styles.title}>
                                UNSERE CHEF-KÖCHE: AMAL
                            </h2>
                            <h2 class={styles.bigTitle}>INDIAN STYLE.</h2>
                            <h4 class={styles.text}>
                                Amal ist 35 und ist schon jung Chefkoch mit
                                Verantwortung geworden. Er arbeitete für
                                verschiedene Catering-Firmen und war sogar mal
                                eine Zeit lang Koch auf einem Kreuzfahrtschiff.
                                Er ist Profi in der internationalen Küche, aber
                                hat auch einen beson- deren Bezug zur indischen
                                Küche, da er mit dieser aufgewachsen ist.
                            </h4>
                            <h4 class={styles.text}>
                                „Wie jeder Koch liebe ich es zu kochen. Noch
                                schöner finde ich es neues auszuprobie- ren.
                                Indische Küche wird oft nicht so gekocht, wie
                                ich das selbst essen würde. Ins- besondere die
                                Menge an Zusatzstoffen, die einfach
                                untergemischt wird, obwohl das gar nicht nötig
                                ist. Deshalb ist es toll für mich, dass wir den
                                Indian Style haben und ich meine Erfahrung und
                                die indische Küche anderen Menschen näherbringen
                                kann. Indische Küche ist vielseitig und gesund,
                                und oft unterschätzt. Ich freue mich, wenn ich
                                viele indische Gerichte für die Leute kochen
                                kann. Leute bestellt indisch!„
                            </h4>
                        </div>
                    </div>

                    <img src={Emilio} class={styles.image} />
                </div>
            </div>
            <div
                class={styles.cookersBackground}
                style={{
                    backgroundImage: `url("${CookersBackground}")`,
                }}
            >
                <div class={styles.cookersInfoContainer}>
                    <div class={styles.cookersInfo}>
                        <div class={styles.cookers}>
                            <h2 class={styles.title}>
                                UNSERE CHEF-KÖCHE: AMAL
                            </h2>
                            <h2 class={styles.bigTitle}>INDIAN STYLE.</h2>
                            <h4 class={styles.text}>
                                Amal ist 35 und ist schon jung Chefkoch mit
                                Verantwortung geworden. Er arbeitete für
                                verschiedene Catering-Firmen und war sogar mal
                                eine Zeit lang Koch auf einem Kreuzfahrtschiff.
                                Er ist Profi in der internationalen Küche, aber
                                hat auch einen beson- deren Bezug zur indischen
                                Küche, da er mit dieser aufgewachsen ist.
                            </h4>
                            <h4 class={styles.text}>
                                „Wie jeder Koch liebe ich es zu kochen. Noch
                                schöner finde ich es neues auszuprobie- ren.
                                Indische Küche wird oft nicht so gekocht, wie
                                ich das selbst essen würde. Ins- besondere die
                                Menge an Zusatzstoffen, die einfach
                                untergemischt wird, obwohl das gar nicht nötig
                                ist. Deshalb ist es toll für mich, dass wir den
                                Indian Style haben und ich meine Erfahrung und
                                die indische Küche anderen Menschen näherbringen
                                kann. Indische Küche ist vielseitig und gesund,
                                und oft unterschätzt. Ich freue mich, wenn ich
                                viele indische Gerichte für die Leute kochen
                                kann. Leute bestellt indisch!„
                            </h4>
                        </div>
                    </div>

                    <img src={Jea} class={styles.image} />
                </div>
            </div>
            <div
                class={styles.cookersBackground}
                style={{
                    backgroundImage: `url("${CookersBackground}")`,
                }}
            >
                <div class={styles.cookersInfoContainer}>
                    <div class={styles.cookersInfo}>
                        <div class={styles.cookers}>
                            <h2 class={styles.title}>
                                UNSERE CHEF-KÖCHE: AMAL
                            </h2>
                            <h2 class={styles.bigTitle}>INDIAN STYLE.</h2>
                            <h4 class={styles.text}>
                                Amal ist 35 und ist schon jung Chefkoch mit
                                Verantwortung geworden. Er arbeitete für
                                verschiedene Catering-Firmen und war sogar mal
                                eine Zeit lang Koch auf einem Kreuzfahrtschiff.
                                Er ist Profi in der internationalen Küche, aber
                                hat auch einen beson- deren Bezug zur indischen
                                Küche, da er mit dieser aufgewachsen ist.
                            </h4>
                            <h4 class={styles.text}>
                                „Wie jeder Koch liebe ich es zu kochen. Noch
                                schöner finde ich es neues auszuprobie- ren.
                                Indische Küche wird oft nicht so gekocht, wie
                                ich das selbst essen würde. Ins- besondere die
                                Menge an Zusatzstoffen, die einfach
                                untergemischt wird, obwohl das gar nicht nötig
                                ist. Deshalb ist es toll für mich, dass wir den
                                Indian Style haben und ich meine Erfahrung und
                                die indische Küche anderen Menschen näherbringen
                                kann. Indische Küche ist vielseitig und gesund,
                                und oft unterschätzt. Ich freue mich, wenn ich
                                viele indische Gerichte für die Leute kochen
                                kann. Leute bestellt indisch!„
                            </h4>
                        </div>
                    </div>

                    <img src={Nicole} class={styles.image} />
                </div>
            </div>
        </div>
    );
};

export default Koche;
