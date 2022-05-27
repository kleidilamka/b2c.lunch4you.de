import React from "react";
import styles from "./MenuStyles.module.scss";
import GermanStyle from "../../assets/Icon_German.svg";
import ItalianStyle from "../../assets/Icon_Italian.svg";
import MediterraneanStyle from "../../assets/Icon_Mediterranean.svg";
import AsianStyle from "../../assets/Icon_Asia.svg";
import IndianStyle from "../../assets/Icon_Indian.svg";
import FitStyle from "../../assets/Icon_Fit.svg";
import CurryProject from "../../assets/Icon_Curry.svg";

const data = [
    {
        id: "1",
        image: GermanStyle,
        firstLabel: "GERMAN",
        secondLabel: "STYLE",
    },
    {
        id: "2",
        image: ItalianStyle,
        firstLabel: "ITALIAN",
        secondLabel: "STYLE",
    },
    {
        id: "3",
        image: MediterraneanStyle,
        firstLabel: "MEDITERRANEAN",
        secondLabel: "STYLE",
    },
    {
        id: "4",
        image: AsianStyle,
        firstLabel: "ASIAN",
        secondLabel: "STYLE",
    },
    {
        id: "5",
        image: IndianStyle,
        firstLabel: "INDIAN",
        secondLabel: "STYLE",
    },
    { id: "6", image: FitStyle, firstLabel: "Fit", secondLabel: "Style" },
    {
        id: "7",
        image: CurryProject,
        firstLabel: "THE CURRY",
        secondLabel: "PROJECT",
    },
];

const MenuStyles = () => {
    return (
        <div class={styles.root}>
            <div class={styles.foodStylesList}>
                {data.map((item) => (
                    <div class={styles.foodStyles} key={item}>
                        <img src={item.image} class={styles.foodStyleImage} />
                        <h4 class={styles.label}>
                            {item.firstLabel} <br /> {item.secondLabel}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuStyles;
