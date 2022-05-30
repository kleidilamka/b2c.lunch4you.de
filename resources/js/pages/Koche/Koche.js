import React from "react";
import styles from "./Koche.module.scss";
import Header from "../../assets/Header_Koeche.jpg";
import KocheBackground from "../../assets/KocheBackground.jpg";
import Roland from "../../assets/Koch_Roland.jpg";
import Marcello from "../../assets/Koch_Marcello.jpg";
import Emilio from "../../assets/Koch_Emilio.jpg";
import Amal from "../../assets/Koch_Amal.jpg";
import Jae from "../../assets/Koch_Jae.jpg";
import Nicole from "../../assets/Koch_Nicole.jpg";

const data = [
    {
        id: "1",
        name: "ROLAND",
        image: Roland,
        color: "#D1060C",
        cookingStyle: "GERMAN STYLE & CURRYWURST.",
        descriptionOne:
            "Bei LUNCH4YOU ist Roland verantwortlich für den German Style und für die Zubereitung und Entwicklung der Menüs verantwortlich. Roland ist mit Leib und Seele Koch er ist 47 Jahre alt und hat ganze 30 Jahre Berufserfahrung. Er liebt die deutsche und französische Küche, kennt sich natürlich aber auch in anderen Küchen wie der italienischen Küche aus.",
        descriptionTwo:
            "„Ich liebe genussvolles Essen. Essen ist nicht nur ein Bedürfnis. Man sollte sich bewusst sein, was man zu sich nimmt. Ich möchte, dass meine Menüs Menschen nicht nur schmecken, sondern dass die Leute entspannt genießen und sich denken, das war lecker! Wenn du Kohlroulade bestellst, habe ich die von Hand gewickelt, mit dem ganzen Wissen, dass ich mir in den Jahren angeeignet habe. Die Semmelknödel sind ein Rezept meiner Mama. Der Rinderbraten gart bei mir im Niedriggarverfahren mehrere Stunden, vorher wird er in meiner Rezeptur eingelegt, um ihn zart werden zu lassen. Ich stehe hinter meinen Menüs und freue mich, über jede Bestellung, die kommt und die ich zubereite. Die Currywurst-Rezepte habe ich in Zusammenarbeit mit unserem Metzger entwickelt.“",
    },
    {
        id: "2",
        name: "MARCELLO",
        image: Marcello,
        color: "#A7C80F",
        cookingStyle: "ITALIAN STYLE.",
        descriptionOne:
            "Marcello ist 41 Jahre und hat seine Passion zum Kochen schon früh entdeckt. Seitdem kochte er erfolgreich für Catering-Firmen und A la Carte Restaurants. Sein Temperament ist genauso hitzig, wie eine Kochflamme. Aber man kann sich immer darauf verlassen, dass es mit ihm was zu lachen gibt und vor allem: das seine Menüs einfach klasse schmecken.",
        descriptionTwo:
            "„Ich kann natürlich alles kochen. Aber mein Herz schlägt für die italienische Küche. Deshalb bin ich auch verantwortlich für den Italian Style. Die Rezepte sind von mir und diese hüte ich wie meinen Schatz. Selbst meine Frau kennt mein Bolognese-Rezept nicht. Heutzutage haben die Leute viel Stress oder können nicht kochen, warum sollten sie auf leckere und abwechslungsreiche Gerichte verzichten? Ich koche für mein Leben gerne für andere. Und Deshalb ist Koch nicht mein Job, sondern meine Berufung. Schmeckt jemandem mein Essen nicht, kann ich die ganze Nacht nicht schlafen und überlege was ich verbessern kann. Ich denke, das schmeckt man auch bei meinen Gerichten. Und es gibt nichts Besseres als eine Lasagne oder leckere Pasta!“",
    },
    {
        id: "3",
        name: "EMILIO",
        image: Emilio,
        color: "#DDA122",
        cookingStyle: "MEDITERRANEAN STYLE.",
        descriptionOne:
            "Emilio ist unser Küken, aber schon jetzt ein fantastischer Koch, der sich schon früh auf die mediterrane Küche spezialisiert hat. Er kochte bereits mit 7 Jahren mit seiner Mama. Seine Ausbildung absolvierte er mit Bravour in einem 4 Sterne Restaurant und arbeitete seitdem in verschiedenen namhaften à la Carte Restaurants. Bei uns ist er verantwortlich für die Mediterranen Gerichte.",
        descriptionTwo:
            "„Beigebracht hat mir das Kochen eigentlich meine Mama. Weshalb mir italienische Gerichte im Blut liegen. Ich finde es toll, meine Kindheitsküche zu zeigen. Denn diese ist vielfältig und einfach nur lecker. Ich freue mich beim Lunch4You Team zu sein, denn wo hat man die Möglichkeit für ganz Deutschland zu kochen? Im Prinzip haben wir ein Restaurant mit Gästen von Überall und wir helfen den Leuten gute und abwechslungsreiche Küche zu bekommen eben für jeden verfügbar, ob mit oder ohne Auto, ob wegen Stress oder weil man es körperlich nicht mehr gut hinbekommt. Ich finde das einfach großartig.“",
    },
    {
        id: "4",
        name: "AMAL",
        image: Amal,
        color: "#DB0267",
        cookingStyle: "INDIAN STYLE.",
        descriptionOne:
            "Amal ist 35 und ist schon jung Chefkoch mit Verantwortung geworden. Er arbeitete für verschiedene Catering-Firmen und war sogar mal eine Zeit lang Koch auf einem Kreuzfahrtschiff. Er ist Profi in der internationalen Küche, aber hat auch einen besonderen Bezug zur indischen Küche, da er mit dieser aufgewachsen ist.",
        descriptionTwo:
            "„Wie jeder Koch liebe ich es zu kochen. Noch schöner finde ich es neues auszuprobieren. Indische Küche wird oft nicht so gekocht, wie ich das selbst essen würde. Insbesondere die Menge an Zusatzstoffen, die einfach untergemischt wird, obwohl das gar nicht nötig ist. Deshalb ist es toll für mich, dass wir den Indian Style haben und ich meine Erfahrung und die indische Küche anderen Menschen näherbringen kann. Indische Küche ist vielseitig und gesund, und oft unterschätzt. Ich freue mich, wenn ich viele indische Gerichte für die Leute kochen kann. Leute bestellt indisch!„",
    },
    {
        id: "5",
        name: "JAE",
        image: Jae,
        color: "#FDC002",
        cookingStyle: "ASIAN STYLE.",
        descriptionOne:
            "Jae 27,  ist gebürtig aus Korea, lebt aber schon seit dem zarten Alter von 6 in Deutschland. Ihre Ausbildung absolvierte sie in der Schweiz. Danach tingelte sie ein bisschen um die Welt, um Erfahrung zu sammeln. Sie ist bei uns verantwortlich für die Asian Style Menüs.",
        descriptionTwo:
            "„Wenn die Leute an asiatische Gerichte denken, denken sie meistens nur an den Chinesen um die Ecke. Das hat meistens nichts mit echter asiatischer Küche zu tun. Asien ist auch ein riesiger Kontinent, auf dem es eine ganze Vielzahl an Gerichten aus verschiedenen Ländern gibt. Für mich besteht die Herausforderung, diese ganze Vielfalt authentisch nachzukochen, aber trotzdem dem deutschen Geschmack anzupassen ohne das Gericht zu verfälschen. Das erfordert viel probieren und testen. Und wieder testen. Aber genau das macht mir Spaß und die Leute können sich darauf verlassen, dass sie leckere Gerichte bekommen aus Thailand, aus China aus Korea. Ich finde von uns Köchen habe ich das Glück für die vielfältigste Küche verantwortlich zu sein. Aber das denken wir wahrscheinlich alle.„",
    },
    {
        id: "6",
        name: "NICOLE",
        image: Nicole,
        color: "#1FB7C7",
        cookingStyle: "FIT STYLE.",
        descriptionOne:
            "Nicole ist verantwortlich für die Fit Style Gerichte. Neben ihrer Profession als Köchin, hat sie sich auch intensiv mit gesunder Küche und den Einfluss auf die körperliche Fitness spezialisiert. Sie ist passionierte Sportlerin und hat gerade deshalb ein persönliches Interesse an der optimierten Ernährung.",
        descriptionTwo:
            "„Ich liebe Essen und ich liebe Sport. Für manche schließt sich das aus. Für mich absolut nicht. Im Gegenteil, ich finde das man mit dem was man zu sich nimmt einen großen Teil zu seinem Wohlbefinden beiträgt. Und auch nur so kann man seine jeweiligen Ziele erreichen. Zudem gibt es einfach immer mehr Menschen, die leider nicht alles vertragen. Sollen diese etwa auch leckeres Essen verzichten? Oder sich permanent den Stress machen selbst zu kochen? Ich denke nicht, gerade aus diesem Grund finde ich es toll bei Lunch4You mitzuwirken. Die Rezepte für unsere Fitness Linie kreiere ich, immer unter dem Aspekt: lecker, gesund & optimiert aufs Lebensziel! Wir arbeiten bei der Entwicklung auch immer eng mit Isabell zusammen. Sie ist unsere Ökotrophologin, die uns immer zur Seite steht, wenn wir Fragen haben.„",
    },
];

const Koche = () => {
    return (
        <div class={styles.root}>
            {/* Background Image */}
            <div
                class={styles.bgImage}
                style={{
                    backgroundImage: `url("${Header}")`,
                }}
            ></div>
            {/* Page Details */}
            <div class={styles.container}>
                <h2 class={`${styles.text} ${styles.font}`}>
                    UNSER ONLINE-RESTAURANT - IMMER FÜR DICH DA!
                </h2>
                <h2 class={`${styles.title} ${styles.font}`}>
                    BEI UNS KOCHEN ECHTE KÖCHE AUF BESTELLUNG.
                </h2>
                <h4
                    class={`${styles.description} ${styles.font}`}
                    style={{ width: "80%" }}
                >
                    Wir von Lunch4You hatten die Vision: leckere Fertiggerichte,
                    aber besser. Von echten Köchen mit Know-How mit Hand und
                    ganz viel Liebe zubereitet. Also das erste richtige
                    Online-Restaurant - das muss doch gehen. Und ja, das tut es.
                </h4>
            </div>
            {/* Cookers */}
            <div
                class={styles.kocheBackground}
                style={{
                    backgroundImage: `url("${KocheBackground}")`,
                }}
            >
                {data.map((item) => (
                    <div class={styles.cookContainer}>
                        <div class={styles.cookDetails}>
                            <h2
                                class={`${styles.text} ${styles.font}`}
                                style={{ color: item.color }}
                            >
                                UNSERE CHEF-KÖCHE: {item.name}
                            </h2>
                            <h2 class={`${styles.title} ${styles.font}`}>
                                {item.cookingStyle}
                            </h2>
                            <h4 class={`${styles.description} ${styles.font}`}>
                                {item.descriptionOne}
                            </h4>
                            <h4
                                class={`${styles.description} ${styles.font}`}
                                style={{ fontStyle: "italic" }}
                            >
                                {item.descriptionTwo}
                            </h4>
                            <h4
                                class={`${styles.text} ${styles.font}`}
                                style={{
                                    fontSize: 24,
                                    fontStyle: "italic",
                                    color: item.color,
                                }}
                            >
                                {item.name}
                            </h4>
                        </div>
                        <img src={item.image} class={styles.cookPicture} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Koche;
