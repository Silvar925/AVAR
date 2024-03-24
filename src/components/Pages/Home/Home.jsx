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
import { BaseCard } from '../../ui/BaseCard/BaseCard';
import { NewBanner } from '../../blocks/NewBanner/NewBanner';


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
            <Banner info={bannerInfo.Home} type="buttons" backgroundImage="Home"/>

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
                                    <BaseCard style="white" width="403px" height="214px">
                                        <img src={item.icon} alt="#" />
                                        <p>{item.text}</p>
                                    </BaseCard>
                                );
                            })
                        }
                    </div>

                </section>

                <section className="statisticsContainer">
                    <div className="statisticsCardList">
                        <BaseCard style="transparent" height="203px" width="299px">
                            <h1>20</h1>
                            <p>Projekte jahrlich</p>
                        </BaseCard>

                        <BaseCard style="transparent" height="203px" width="299px">
                            <h1>20</h1>
                            <p>Projekte jahrlich</p>
                        </BaseCard>

                        <BaseCard style="transparent" height="203px" width="299px">
                            <h1>20</h1>
                            <p>Projekte jahrlich</p>
                        </BaseCard>

                        <BaseCard style="transparent" height="203px" width="299px">
                            <h1>20</h1>
                            <p>Projekte jahrlich</p>
                        </BaseCard>
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