import "./Projekte.css"
import { Banner } from "../../ui/Banner/Banner"
import { bannerInfo } from "../../data"
import { WhiteCard } from "../../ui/WhiteCard/WhiteCard"
import { OffiziellerPartner } from "../../blocks/OffiziellerPartner/OffiziellerPartner"
import { Footer } from "../../blocks/Footer/Footer"

export const Projekte = () => {
    return (
        <>
            <Banner info={bannerInfo.Projekte} type="slider" backgroundImage="Home" />

            <section className="KomplettModernisierungContainer">
                <div className="KomplettModernisierungTittle">
                    <h1>Komplett Modernisierung</h1>
                    <p>Projensdorfer Straße 110, 24106 Kie</p>
                </div>

                <div className="KomplettModernisierungText">
                    <p>
                        Bei diesem Projekt entwickelte AVAR ein komplettes Interior Design für denInnenbereich,
                        setzte diesen dann erfolgreich um, sodass der Kunde zufrieden war.Wir achten darauf
                        Sie als Kunde stets auf dem Laufendem zu halten, sodass Sieimmer einen Überblick haben
                    </p>
                </div>

                <div className="KomplettModernisierungListCard">
                    <WhiteCard row={1} text="Design" icon="icons/coolicon.png" titleColumn={false} center={true} />
                    <WhiteCard row={1} text="Plan" icon="icons/coolicon.png" titleColumn={false} center={true} />
                    <WhiteCard row={1} text="Umsetzubg" icon="icons/coolicon.png" titleColumn={false} center={true} />
                    <WhiteCard row={1} text="Fertigstellung" icon="icons/coolicon.png" titleColumn={false} center={true} />
                </div>
            </section>

            <section className="feedbackTeamContainer">
                <div className="feedbackTeamContainerText">
                    <div>
                        <img src="icons/quotationMarks.png" alt="#" />
                    </div>

                    <div className="feedbackText">
                        <p>
                            ‘’Wir haben das Team von AVAR am Anfang mit ein wenig Vorsicht betrachtet,
                            allerdings haben wir schnell gemerkt, dass es Erfahrene Jungs sind, die ihre Arbeit kennen und
                            diese einfach auf einem unglaublichen Niveau und Schnelligkeit umsetzten. Im Moment fehlt das Geld
                            für eine zweite Wohnung, allerdings, falls unsere Familie sich entschließt im Laufe der Zeit eine zweite
                            zu kaufen, werden wir uns definitiv für eine erneute Zusammenarbeit mit Herrn Abakarov von Team AVAR
                            entscheiden. Danke euch!’’
                        </p>
                    </div>

                    <div className="authorNameContainer">
                        <p>Pia-Maria Wendtland</p>
                    </div>

                </div>

            </section>

            <OffiziellerPartner />

            <Footer/>

        </>
    )
}