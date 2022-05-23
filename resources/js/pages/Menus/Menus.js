import React from "react";
import MenuStyles from "../../components/MenuStyles";
import styles from "./Menus.module.scss";

const Menus = () => {
    return (
        <div class={styles.root}>
            <h2 style={{ color: "#F89B1B" }}>
                FÜR JEDEN GESCHMACK DAS RICHTIGE DABEI.
            </h2>
            <h2 class={styles.title}>
                MACHEN SIE MIT UNS <br />
                EINE KULINARISCHE WELTREISE.
            </h2>
            {/* Menu Styles */}
            <MenuStyles />
            {/* Categories */}
            <div class={styles.categoriesContainer}>
                <div class={styles.topContainer}>
                    <h2>SPEZIELLE WÜNSCHE? ABER GERNE!</h2>
                </div>
                {/* Column 1 */}
                <div class={styles.bottomContainer}>
                    <div class={styles.categories}>
                        <h4 class={styles.title}>STYLE</h4>
                        {Array.apply(null, { length: 7 }).map((e, i) => (
                            <div class={styles.inputs}>
                                <input
                                    type="checkbox"
                                    id="scales"
                                    name="scales"
                                />
                                <label class={styles.label} for="scales">
                                    Scales
                                </label>
                            </div>
                        ))}
                    </div>
                    {/* Column 2 */}
                    <div class={styles.categories}>
                        <h4 class={styles.title}>ERNÄHRUNGSFORM</h4>
                        {Array.apply(null, { length: 5 }).map((e, i) => (
                            <div class={styles.inputs}>
                                <input
                                    type="checkbox"
                                    id="scales"
                                    name="scales"
                                />
                                <label class={styles.label} for="scales">
                                    Scales
                                </label>
                            </div>
                        ))}
                    </div>
                    {/* Column 3 */}
                    <div class={styles.categories}>
                        <h4 class={styles.title}>ALLERGENFREI</h4>
                        {Array.apply(null, { length: 10 }).map((e, i) => (
                            <div class={styles.inputs}>
                                <input
                                    type="checkbox"
                                    id="scales"
                                    name="scales"
                                />
                                <label class={styles.label} for="scales">
                                    Scales
                                </label>
                            </div>
                        ))}
                    </div>
                    {/* Column 4 */}
                    <div class={styles.categories}>
                        <h4 class={styles.title}>BESTSELLER</h4>
                        {Array.apply(null, { length: 9 }).map((e, i) => (
                            <div class={styles.inputs}>
                                <input
                                    type="checkbox"
                                    id="scales"
                                    name="scales"
                                />
                                <label class={styles.label} for="scales">
                                    Scales
                                </label>
                            </div>
                        ))}
                    </div>
                    {/* Column 5 */}
                    <div class={styles.categories}>
                        <h4 class={styles.title}>KATEGORIE</h4>
                        {Array.apply(null, { length: 3 }).map((e, i) => (
                            <div class={styles.inputs}>
                                <input
                                    type="checkbox"
                                    id="scales"
                                    name="scales"
                                />
                                <label class={styles.label} for="scales">
                                    Scales
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menus;
