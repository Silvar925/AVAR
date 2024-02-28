import "./Uber.css"
import { Banner } from "../../ui/Banner/Banner"
import { bannerInfo } from "../../data"
import { Footer } from "../../blocks/Footer/Footer"
import { unsereGrundwerte } from "../../data"
import { WhiteCard } from "../../ui/WhiteCard/WhiteCard"
import { TranslucentCard } from "../../ui/TranslucentCard/TranslucentCard"
import { OffiziellerPartner } from "../../blocks/OffiziellerPartner/OffiziellerPartner"


export const UberPage = () => {
    return (
        <>
            <Banner info={bannerInfo.Uber} buttons={false} backgroundImage="Uber" />

            <section className="einStarkesContainer">
                <div className="einStarkesContainerTitle">
                    <h1>Ein Starkes Team Mit Anspruchsvollen Zielen</h1>
                </div>

                <div className="einStarkesContainerText">
                    <p>Eine Vision, die zunächst einmal unvorstellbar erschien, aberdurch fließ und glaube an
                        uns selbst heute vor der Tür liegt.Das Team AVAR biete Ihnen ein Spektrum von Leistungen
                        rundum ihr Projekt und unterstütz Sie dabei sorglos den Tag zudurchleben, weil wir uns um alles
                        kümmern.
                    </p>
                </div>

                <div className="einStarkesContainerImages">
                    <div className="einStarkesContainerListCard">
                        <TranslucentCard orientation="column" tittle="200+" text="Projekte jahrlich" />
                        <TranslucentCard orientation="column" tittle="200+" text="Projekte jahrlich" />
                        <TranslucentCard orientation="column" tittle="200+" text="Projekte jahrlich" />
                        <TranslucentCard orientation="column" tittle="200+" text="Projekte jahrlich" />
                    </div>
                </div>

            </section>

            <section className="unsereGrundwerte">
                <div className="unsereGrundwerteTitle">
                    <h1>Unsere Grundwerte</h1>
                </div>

                <div className="unsereGrundwerteText">
                    <p>
                        Unser Ziel ist Ihre Zufriedenheit und Sorglosigkeit.
                        Dabei hoffen wirauf Ihr Vertrauen, welches wir nicht missbrauchen werden.
                    </p>

                </div>

                <div className="listCard">
                    {
                        unsereGrundwerte.map((item, index) => {
                            return (
                                <WhiteCard row={2} titleColumn={true} text={item.text} title={item.title} icon={item.icon} />
                            )
                        })
                    }
                </div>

            </section>

            <OffiziellerPartner />

            <Footer></Footer>
        </>
    )
}