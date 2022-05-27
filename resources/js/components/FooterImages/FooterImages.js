import React from "react";
import styles from "./FooterImages.module.scss";
import FooterImgOne from "../../assets/footerImg1.jpeg";
import FooterImgTwo from "../../assets/footerImg2.jpg";
import FooterImgThree from "../../assets/footerImg3.jpg";
import FooterImgFour from "../../assets/footerImg4.jpeg";

const data = [
    {
        id: "1",
        coloredTitle: "REGIONALE ZUTATEN",
        color: "#91CB17",
        image: FooterImgOne,
        firstTitle: "FÜR ALLE DIE WERT AUF",
        secondTitle: "GUTES ESSEN LEGEN.",
        descriptionOne:
            "Für die Zubereitung unserer Gerichte verwenden wir aus- schließlich frische und gesunde Zutaten von ausgewählten überwiegend regionalen Lieferanten aus dem Raum Fulda.",
        descriptionTwo:
            "Das bedeutet: kurze Wege und geringe Lieferkosten. Außerdem verlieren die Produkte dadurch weniger Nähr- stoffe und werden frisch verarbeitet. ",
    },
    {
        id: "2",
        coloredTitle: "FRISCH. BUNT. GESUND.",
        color: "#E4015C",
        image: FooterImgTwo,
        firstTitle: "GESUNDES UND",
        secondTitle: "GSCHNELLES ESSEN.",
        descriptionOne:
            "Von unseren Chefköchen entwickelte, ausgewogene Rezepte. Mit dem Fokus auf gesundes, fertig zubereitetes Mittagessen  mit wenig Zucker, Fett und ohne die Zufuhr von Zusatzstoffen. Mit den besten Zutaten direkt aus der Region.",
        descriptionTwo:
            "Denn wir sind mitten in der schönen Rhön beheimatet,  im grünen Herzen Deutschlands. Unsere Produkte beziehen wir immer frisch von regionalen Versorgern.",
    },
    {
        id: "3",
        coloredTitle: "GEKOCHT, VERPACKT, GELIEFERT.",
        color: "#4CADBD",
        image: FooterImgThree,
        firstTitle: "100% LÜCKENLOS",
        secondTitle: "GEKÜHLTE LIEFERKETTE.",
        descriptionOne:
            "Von der ersten Sekunde an, behandeln wir unsere ausgewählten Zutaten mit viel Liebe und Sorgfalt. Nach der Zubereitung durch unsere Chefköche, werden unsere Menüs direkt unter allen wichtigen hygenischen Aspekten verpackt und gekühlt. Bis zum Eintreffen bei Dir zu Hause, wird diese Kühlkette nicht unterbrochen. Deine Bestellung wird von uns gekühlt versand, so dass Du unsere leckeren Gerichte einfach zu Hause genießen kannst. Im Kühlschrank sind die Menüs bei Dir problemlos 5 Tage bei 4° haltbar.",
        descriptionTwo: "",
    },
    {
        id: "4",
        coloredTitle: "AUCH AUSSEN HERUM UMWELTBEWUSST",
        color: "#FFAF32",
        image: FooterImgFour,
        firstTitle: "VERPACKUNG:",
        secondTitle: "100% NACHHALTIG",
        descriptionOne:
            "Wir legen großen Wert auf unseren ökologischen Fußabdruck. Für uns heißt das, dass unsere Menüs nachhaltig verpackt werden. Unsere Schalen für unser Essen bestehen aus Zuckerrohr und die Folie ist aus umweltfreundlicher Zellulose. ",
        descriptionTwo:
            "Natürlich kommt auch unsere Versandverpackung ganz ohne Styropor und Plastik bei dir an.",
    },
    {
        id: "5",
        coloredTitle: "QUALITÄT VON ANFANG BIS ENDE",
        color: "#FFAF32",
        image: FooterImgOne,
        firstTitle: "SICHERHEIT BEI DER ",
        secondTitle: "GESAMTEN HERSTELLUNG.",
        descriptionOne:
            "Du musst dir keine Sorgen machen  wir sind absolute Profis und führen eine regelmäßige Überprüfung sämtlicher Waren hinsichtlich des Qualitäts- und Hygienezustands durch. Dabei kontrollieren wir die Waren über den gesamten Entstehungsprozess hinweg. Wir sind HACCP zertifiziert  das bedeutet die Herstellung unserer Menüs erfolgt grundsätzlich unter sehr streng kontrollierten hygienischen Prozessen und das alles für deinen Schutz!",
        descriptionTwo: "",
    },
];

const FooterImages = () => {
    return (
        <div class={styles.root}>
            {data.map((item) => (
                <div
                    class={styles.backgroundImage}
                    style={{
                        backgroundImage: `url("${item.image}")`,
                    }}
                >
                    <div class={styles.container}>
                        <h2
                            class={`${styles.coloredTitle} ${styles.font}`}
                            style={{ color: item.color }}
                        >
                            {item.coloredTitle}
                        </h2>
                        <h2 class={`${styles.title} ${styles.font}`}>
                            {item.firstTitle}
                            <br />
                            {item.secondTitle}
                        </h2>
                        <h5 class={`${styles.text} ${styles.font}`}>
                            {item.descriptionOne}
                        </h5>
                        <h5 class={`${styles.text} ${styles.font}`}>
                            {item.descriptionTwo}
                        </h5>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FooterImages;
