import "./Kontaktieren.css"
import { Banner } from "../../ui/Banner/Banner"
import { bannerInfo } from "../../data"
import { WhiteButton } from "../../ui/WhiteButton/WhiteButton"
import { OffiziellerPartner } from "../../blocks/OffiziellerPartner/OffiziellerPartner"
import { Footer } from "../../blocks/Footer/Footer"


export const Kontaktieren = () => {
    return (
        <>
            <Banner info={bannerInfo.Kontakt} type="additionalImage" backgroundImage="Home" />

            <section className="WirFreuenUnsContainer">
                <div className="WirFreuenUnsTittle">
                    <h1>Wir Freuen Uns uber Ihr Interesse</h1>
                </div>

                <div className="WirFreuenUnsSubtittle">
                    <p>
                        Gerne nehmen wir uns die Zeit mit Ihnen Ihr Bauvorhaben persönlich zu
                        besprechen, Ideen für die Umsetzung zu liefern und Sie positiv zu
                        überzeugen.
                    </p>
                </div>

                <div className="WirFreuenUnsText">
                    <p>Beratung mit Niveau. Unverbindlich und Kostenlos.
                        Das Team AVAR freut sich Ihnen zuhören zu können und Ihre fragen zu beantworten.
                        Eine passende Lösung für Ihr Projekt zu finden ist für uns ein muss. Mit mehr als 25
                        Jahre Branchenerfahrung, einem Starken und Erfahrenen Team, Kreativität und unser engamore
                        werden wir Sie überzeugen. Zögern Sie nicht.
                    </p>
                    <WhiteButton text="Anfrage versenden" />
                </div>

                <div className="WirFreuenUnsListButton">
                    <WhiteButton text="Aalborgring 4, 24109 Kie" transparency={false} icon="icons/redIcons/redGPS.png" />
                    <WhiteButton text="0178 5029999" transparency={false} icon="icons/redIcons/redCall.png" />
                    <WhiteButton text="info@avar-kiel.de" transparency={false} icon="icons/redIcons/redEmail.png" />
                </div>
            </section>


            <section className="MapContainer">


            </section>

            <OffiziellerPartner />
            <Footer />
        </>
    )
}