import "./Services.css"
import { bannerInfo, serviceStatisticCard, sieWollenEinAngebot } from "../../data"
import { Banner } from "../../ui/Banner/Banner"
import { WhiteCard } from "../../ui/WhiteCard/WhiteCard"
import { UnserseService } from "../../blocks/UnsereService/UnsereService"
import { TranslucentCard } from "../../ui/TranslucentCard/TranslucentCard"
import { Footer } from "../../blocks/Footer/Footer"


export const ServicesPage = () => {
    return (
        <>
            <Banner info={bannerInfo.Service} type="additionalText" backgroundImage="Service" />

            <section className="servicesPage">
                {/* <UnserseService /> */}

                <section className="sieWollenEinContainer">
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
                <div className="statisticsCardList">

                    {
                        serviceStatisticCard.map((item, index) => {
                            return (
                                <TranslucentCard orientation="column" tittle={item.tittle} subtitle={item.subtitle} text={item.text} />
                            )
                        })
                    }
                </div>
            </section>

            <Footer />
        </>
    )
}