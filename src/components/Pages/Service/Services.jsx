import "./Services.css"
import { bannerInfo, serviceStatisticCard, sieWollenEinAngebot } from "../../data"
import { Banner } from "../../ui/Banner/Banner"
import { WhiteCard } from "../../ui/WhiteCard/WhiteCard"
import { UnsereServiceMobile, UnserseService } from "../../blocks/UnsereService/UnsereService"
import { TranslucentCard } from "../../ui/TranslucentCard/TranslucentCard"
import { Footer } from "../../blocks/Footer/Footer"
import { Bewertungen } from "../../blocks/Bewertungen/Bewertungen"
import { BaseCard } from "../../ui/BaseCard/BaseCard"
import { MySwiper } from "../../ui/Swiper/Swiper"
import { OffiziellerPartner } from "../../blocks/OffiziellerPartner/OffiziellerPartner"


export const ServicesPage = () => {
    let styles = {}

    if (window.innerWidth >= 320 && window.innerWidth <= 435) {
        styles = {
            marginTop: '1000px'
        }
    }


    return (
        <>
            <Banner info={bannerInfo.Service} type="additionalText" backgroundImage="Service" />

            <section className="servicesPage">

                {window.innerWidth >= 320 && window.innerWidth <= 435 ? <UnsereServiceMobile /> : <UnserseService />}

                <section className="sieWollenEinContainer" style={{ ...styles }}>
                    <div className="sieWollenEinTitle">
                        <h1>Sie Wollen Ein Angebot?</h1>
                    </div>

                    <div className="sieWollenEinUnderTitle">
                        <p>Gerne besprechen wir Ihr Projekt und werden Ihnen zeitnah ein Angeboterstellen.</p>
                    </div>

                    <div className="sieWollenEinText">
                        <p>Wir vereinbaren in der selben Woche noch einen Termin zur persönlichen individuellen
                            Beratung bzw. Besichtigung Ihres Objekts und erstellen Ihnen innerhalb weniger Tage
                            ein ausführliches Angebot und können auf Wunsch gleich loslegen.
                        </p>
                    </div>

                    <div className="sieWollenEinList">
                        <div className="sieWollenEinListRow">
                            <WhiteCard row={1} text="Terminvereinbarung" icon="icons/coolicon.png" titleColumn={false} />
                            <WhiteCard row={1} text="Besichtigung" icon="icons/coolicon.png" titleColumn={false} />
                            <WhiteCard row={1} text="Interior Design erstellen" icon="icons/coolicon.png" titleColumn={false} />
                        </div>

                        <div className="sieWollenEinListRow">
                            <WhiteCard row={1} text="Angebotserstellung" icon="icons/coolicon.png" titleColumn={false} />
                            <WhiteCard row={1} text="Umsetzung" icon="icons/coolicon.png" titleColumn={false} />
                            <WhiteCard row={1} text="Fertigstellung" icon="icons/coolicon.png" titleColumn={false} />
                        </div>
                    </div>

                </section>
            </section>

            <section className="statisticsContainer">
                <div className="temp">
                    <h2>ARBEITSPROZESS:</h2>

                    <div className="statisticsCardList">
                        {
                            serviceStatisticCard.map((item, index) => {
                                return (
                                    <TranslucentCard key={index} orientation="column" tittle={item.tittle} subtitle={item.subtitle} text={item.text} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <Bewertungen />
            <OffiziellerPartner />
            <Footer />
        </>
    )
}