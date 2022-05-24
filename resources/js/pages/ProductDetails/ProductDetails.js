import React, { useState } from "react";
import styles from "./ProductDetails.module.scss";
import Food from "../../assets/foodBackground.jpeg";
import HeartIcon from "../../assets/Icon_Herz_dark.svg";
const ProductDetails = () => {
    const [active, setActive] = useState(false);

    return (
        <div class={styles.root}>
            <div class={styles.container}>
                {/* Top Container */}
                <div class={styles.topContainer}>
                    {/* Top Left Container */}
                    <div class={styles.topLeftContainer}>
                        <h1>THAI-CURRY</h1>
                        <h2 class={styles.text}>
                            Cremig, scharf und einfach ein Genuss! Die thailän-
                            dische Küche wäre ohne ihr anregendes Thai Curry nur
                            halb so berühmt.
                        </h2>
                        <h2 class={styles.text}>
                            Das saftige Hähnchenbrustfilet, knackiges Gemü- se,
                            cremige Kokosmilch sowie fluffiger Reis machen
                            dieses Gericht zu einem echten Sattmacher. Zitro-
                            nengras, Ingwer und Limette dürfen nicht fehlen und
                            sorgen für das authentische Thai-Feeling.
                        </h2>

                        <div class={styles.foodDetailsList}>
                            {Array.apply(null, { length: 3 }).map((e, i) => (
                                <div class={styles.foodDetailsContainer}>
                                    <h5>Low Carb</h5>
                                </div>
                            ))}
                        </div>
                        <h2 style={{ marginTop: 20, marginBottom: 20 }}>
                            NÄHRWERTE PRO 100 GRAMM
                        </h2>
                        <div class={styles.foodNutritionList}>
                            {Array.apply(null, { length: 5 }).map((e, i) => (
                                <div class={styles.foodNutritionDetails}>
                                    <div class={styles.roundedLabel}>103</div>
                                    <h5
                                        style={{
                                            alignSelf: "center",
                                            marginTop: 10,
                                        }}
                                    >
                                        PROTEIN
                                    </h5>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Top Right Container Main Image, Images and Icon Container */}
                    <div class={styles.topRightContainer}>
                        <img src={Food} class={styles.mainImage} />
                        <div class={styles.imagesContainer}>
                            {Array.apply(null, { length: 3 }).map((e, i) => (
                                <img src={Food} class={styles.image} />
                            ))}
                        </div>
                        <div class={styles.menuStyles}>
                            <img src={HeartIcon} class={styles.menuStyleLogo} />
                            <h1>ASIA STYLE</h1>
                        </div>
                    </div>
                </div>
                <hr />
                {/* Middle Container */}
                <div class={styles.middleContainer}>
                    {/* Food Desription */}
                    <h4>- ZUTATEN</h4>
                    <h4>
                        Hähnchenfleisch 22,4 %, Kokosmilch 18,7 %, Reis 16,2 %,
                        Zuckerschoten 12,5 %, Paprika 12,5 %, Brokkoli 6,2 %,
                        Möhren 5,0 %, Zitronengras, gelbe Curry Paste 1,2 %
                        (Knoblauch, Zitronengras, Salz, Schalotten, Thai-Ingwer,
                        rote Chilischote, Korriandersamen, Kafir-Limettenschale,
                        Currypulver, Kreuzkümmel, Zimt, Kurkuma, Kardamom,
                        Muskatnuss), Öl, Salz, Curry 0,6 %, Ingwer, Limettensaft
                    </h4>
                    {/* Food Details */}
                    {/* Allergies */}
                    <h4 onClick={() => setActive(!active)}>+ ALLERGENE</h4>
                    {active && (
                        <h4>
                            Hähnchenfleisch 22,4 %, Kokosmilch 18,7 %, Reis 16,2
                            %, Zuckerschoten 12,5 %, Paprika 12,5 %, Brokkoli
                            6,2 %, Möhren 5,0 %, Zitronengras, gelbe Curry Paste
                            1,2 % (Knoblauch, Zitronengras, Salz, Schalotten,
                            Thai-Ingwer, rote Chilischote, Korriandersamen,
                            Kafir-Limettenschale, Currypulver, Kreuzkümmel,
                            Zimt, Kurkuma, Kardamom, Muskatnuss), Öl, Salz,
                            Curry 0,6 %, Ingwer, Limettensaft
                        </h4>
                    )}
                    {/* Nutrition */}
                    <h4 onClick={() => setActive(!active)}>+ NÄHRWERTE</h4>
                    {active && (
                        <h4>
                            Hähnchenfleisch 22,4 %, Kokosmilch 18,7 %, Reis 16,2
                            %, Zuckerschoten 12,5 %, Paprika 12,5 %, Brokkoli
                            6,2 %, Möhren 5,0 %, Zitronengras, gelbe Curry Paste
                            1,2 % (Knoblauch, Zitronengras, Salz, Schalotten,
                            Thai-Ingwer, rote Chilischote, Korriandersamen,
                            Kafir-Limettenschale, Currypulver, Kreuzkümmel,
                            Zimt, Kurkuma, Kardamom, Muskatnuss), Öl, Salz,
                            Curry 0,6 %, Ingwer, Limettensaft
                        </h4>
                    )}
                    {/* Further Information */}
                    <h4 onClick={() => setActive(!active)}>+ ALLERGENE</h4>
                    {active && (
                        <h4>
                            Hähnchenfleisch 22,4 %, Kokosmilch 18,7 %, Reis 16,2
                            %, Zuckerschoten 12,5 %, Paprika 12,5 %, Brokkoli
                            6,2 %, Möhren 5,0 %, Zitronengras, gelbe Curry Paste
                            1,2 % (Knoblauch, Zitronengras, Salz, Schalotten,
                            Thai-Ingwer, rote Chilischote, Korriandersamen,
                            Kafir-Limettenschale, Currypulver, Kreuzkümmel,
                            Zimt, Kurkuma, Kardamom, Muskatnuss), Öl, Salz,
                            Curry 0,6 %, Ingwer, Limettensaft
                        </h4>
                    )}
                    {/* Storage */}
                    <h4 onClick={() => setActive(!active)}>+ ALLERGENE</h4>
                    {active && (
                        <h4>
                            Hähnchenfleisch 22,4 %, Kokosmilch 18,7 %, Reis 16,2
                            %, Zuckerschoten 12,5 %, Paprika 12,5 %, Brokkoli
                            6,2 %, Möhren 5,0 %, Zitronengras, gelbe Curry Paste
                            1,2 % (Knoblauch, Zitronengras, Salz, Schalotten,
                            Thai-Ingwer, rote Chilischote, Korriandersamen,
                            Kafir-Limettenschale, Currypulver, Kreuzkümmel,
                            Zimt, Kurkuma, Kardamom, Muskatnuss), Öl, Salz,
                            Curry 0,6 %, Ingwer, Limettensaft
                        </h4>
                    )}

                    <hr />

                    {/* FAQ */}
                    <h4>FAQ</h4>
                    {/* WIE & WANN LIEFERT LUNCH4YOU?  */}
                    <h4 onClick={() => setActive(!active)}>
                        + WIE & WANN LIEFERT LUNCH4YOU?
                    </h4>
                    {active && (
                        <h4>
                            Hähnchenfleisch 22,4 %, Kokosmilch 18,7 %, Reis 16,2
                            %, Zuckerschoten 12,5 %, Paprika 12,5 %, Brokkoli
                            6,2 %, Möhren 5,0 %, Zitronengras, gelbe Curry Paste
                            1,2 % (Knoblauch, Zitronengras, Salz, Schalotten,
                            Thai-Ingwer, rote Chilischote, Korriandersamen,
                            Kafir-Limettenschale, Currypulver, Kreuzkümmel,
                            Zimt, Kurkuma, Kardamom, Muskatnuss), Öl, Salz,
                            Curry 0,6 %, Ingwer, Limettensaft
                        </h4>
                    )}
                    {/*  WIE BEREITE ICH MEINE MENÜS ZU?  */}
                    <h4 onClick={() => setActive(!active)}>
                        + WIE BEREITE ICH MEINE MENÜS ZU?
                    </h4>
                    {active && (
                        <h4>
                            Hähnchenfleisch 22,4 %, Kokosmilch 18,7 %, Reis 16,2
                            %, Zuckerschoten 12,5 %, Paprika 12,5 %, Brokkoli
                            6,2 %, Möhren 5,0 %, Zitronengras, gelbe Curry Paste
                            1,2 % (Knoblauch, Zitronengras, Salz, Schalotten,
                            Thai-Ingwer, rote Chilischote, Korriandersamen,
                            Kafir-Limettenschale, Currypulver, Kreuzkümmel,
                            Zimt, Kurkuma, Kardamom, Muskatnuss), Öl, Salz,
                            Curry 0,6 %, Ingwer, Limettensaft
                        </h4>
                    )}
                    {/* WOHER KOMMEN EURE ZUTATEN?  */}
                    <h4 onClick={() => setActive(!active)}>
                        + WOHER KOMMEN EURE ZUTATEN?
                    </h4>
                    {active && (
                        <h4>
                            Hähnchenfleisch 22,4 %, Kokosmilch 18,7 %, Reis 16,2
                            %, Zuckerschoten 12,5 %, Paprika 12,5 %, Brokkoli
                            6,2 %, Möhren 5,0 %, Zitronengras, gelbe Curry Paste
                            1,2 % (Knoblauch, Zitronengras, Salz, Schalotten,
                            Thai-Ingwer, rote Chilischote, Korriandersamen,
                            Kafir-Limettenschale, Currypulver, Kreuzkümmel,
                            Zimt, Kurkuma, Kardamom, Muskatnuss), Öl, Salz,
                            Curry 0,6 %, Ingwer, Limettensaft
                        </h4>
                    )}
                    {/* WIE LANGE IST MEIN MENÜ HALTBAR? */}
                    <h4 onClick={() => setActive(!active)}>
                        + WIE LANGE IST MEIN MENÜ HALTBAR?
                    </h4>
                    {active && (
                        <h4>
                            Hähnchenfleisch 22,4 %, Kokosmilch 18,7 %, Reis 16,2
                            %, Zuckerschoten 12,5 %, Paprika 12,5 %, Brokkoli
                            6,2 %, Möhren 5,0 %, Zitronengras, gelbe Curry Paste
                            1,2 % (Knoblauch, Zitronengras, Salz, Schalotten,
                            Thai-Ingwer, rote Chilischote, Korriandersamen,
                            Kafir-Limettenschale, Currypulver, Kreuzkümmel,
                            Zimt, Kurkuma, Kardamom, Muskatnuss), Öl, Salz,
                            Curry 0,6 %, Ingwer, Limettensaft
                        </h4>
                    )}
                    <hr />
                    {/* Quantity Container */}
                    <div class={styles.quantityContainer}></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
