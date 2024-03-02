import React, { useState, useEffect } from 'react';
import "./Home.css"
import { Banner } from "../../ui/Banner/Banner"
import { bannerInfo, yourInterestContainer, warumUnsWahlen, unsereAusgewahlten } from "../../data"
import { UnserseService, UnsereServiceMobile } from "../../blocks/UnsereService/UnsereService"
import { Footer } from "../../blocks/Footer/Footer"
import { WhiteCard } from "../../ui/WhiteCard/WhiteCard"
import { TranslucentCard } from "../../ui/TranslucentCard/TranslucentCard"
import { UnsereAusgewahltenCard } from "../../ui/UnsereAusgewahltenCard/UnsereAusgewahltenCard"
import { OffiziellerPartner } from "../../blocks/OffiziellerPartner/OffiziellerPartner"
import { Bewertungen } from "../../blocks/Bewertungen/Bewertungen"


export const Home = () => {
    const [switcher, setSwitcher] = useState(false);

    useEffect(() => {
        const updateSwitcher = () => {
            if (window.innerWidth >= 320 && window.innerWidth <= 435) {
                setSwitcher(true);
            } else {
                setSwitcher(false);
            }
        };

        updateSwitcher();

        window.addEventListener('resize', updateSwitcher);

        return () => {
            window.removeEventListener('resize', updateSwitcher);
        };
    }, []);

    return (
        <>
            <Banner info={bannerInfo.Home} type="buttons" backgroundImage="Home" />

            <section className="yourInterestContainer">
                <div className="yourInterestContainer_left">
                    <img src="Home/leftForest.png" alt="leftForest" />
                </div>

                <div className="yourInterestContainer_center">
                    <div className="yourInterestContainer_center_title">
                        <h1>{yourInterestContainer.title}</h1>
                    </div>

                    <div className="yourInterestContainer_center_text">
                        <p>
                            <span>{yourInterestContainer.text[0]}</span>
                            <span>{yourInterestContainer.text[1]}/</span>
                        </p>
                    </div>

                    <div className="yourInterestContainer_btn">
                        <a href="#">Anfrage versenden</a>
                    </div>

                </div>

                <div className="yourInterestContainer_right">
                    <img src="Home/home.png" alt="home" className="home" />
                    <img src="Home/forest.png" alt="forest" className="forest" />
                </div>

            </section>
{/* 
            {switcher === false && <UnserseService />}
            {switcher === true && <UnsereServiceMobile />} */}


            <div className="bottomContainer">
                <section className="warumWahlenContainer" >
                    <div className="warumWahlenContainerTitle">
                        <h1>Warum Uns Wahlen?</h1>
                    </div>

                    <div className="warumWahlenContainerText">
                        <p>«Wir schaffen Perfektion» ist kein Werbespruch, sondern unser Niveau.
                            Wirsind erst dann zufrieden, wenn Sie es sind. Ihre Wünsche haben für unshöchste Priorität.
                            Über 25 Jahre Erfahrung im Baugewerbe zeichnet sichpositiv aus.
                        </p>
                    </div>

                    <div className="cardList">
                        {
                            warumUnsWahlen.map((item, index) => {
                                return (
                                    <>
                                    </>
                                    // <WhiteCard key={index} row={2} text={item.text} icon={item.icon} titleColumn={false} />
                                );
                            })
                        }
                    </div>

                </section>

                <section className="statisticsContainer">
                    <div className="statisticsCardList">
                        {/* <TranslucentCard orientation="row" tittle="200+" text="Projekte jahrlich" />
                        <TranslucentCard orientation="row" tittle="20" text="Team von Handwerkern" />
                        <TranslucentCard orientation="row" tittle="110%" text="Leistung" />
                        <TranslucentCard orientation="row" tittle="1" text="Ziel" /> */}
                    </div>
                </section>

                <section className="UnsereAusgewahltenContainer">
                    <div className="UnsereAusgewahltenContainerTittle">
                        <h1>Unsere Ausgewahlten Projekte</h1>
                    </div>

                    <div className="UnsereAusgewahltenCardList">
                        {
                            unsereAusgewahlten.map((item, index) => {
                                return (
                                    <UnsereAusgewahltenCard key={index} images={item.image} tittle={item.title} text={item.text} />
                                );
                            })
                        }
                    </div>

                </section>

            </div>

            <Bewertungen />
            <OffiziellerPartner />
            <Footer />
        </>
    )
}