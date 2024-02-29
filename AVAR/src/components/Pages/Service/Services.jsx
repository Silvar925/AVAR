import "./Services.css"
import { bannerInfo } from "../../data"
import { Banner } from "../../ui/Banner/Banner"
import { sieWollenEinAngebot } from "../../data"
import { WhiteCard } from "../../ui/WhiteCard/WhiteCard"
import { UnserseService } from "../../blocks/UnsereService/UnsereService"


export const ServicesPage = () => {
    return (
        <>
            <Banner info={bannerInfo.Service} type="additionalText" backgroundImage="Service" />

            <section className="servicesPage">
                <UnserseService />

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
                            <WhiteCard row={2} text="asdasd" icon="asd" />
                            <WhiteCard row={2} text="asdasd" icon="asd" />
                            <WhiteCard row={2} text="asdasd" icon="asd" />
                        </div>

                        <div className="sieWollenEinListRow">
                            <WhiteCard row={2} text="asdasd" icon="asd" />
                            <WhiteCard row={2} text="asdasd" icon="asd" />
                            <WhiteCard row={2} text="asdasd" icon="asd" />
                        </div>
                    </div>

                </section>

            </section>
        </>
    )
}