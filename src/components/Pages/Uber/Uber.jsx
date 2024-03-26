import "./Uber.css"
import { Banner } from "../../ui/Banner/Banner"
import { bannerInfo, unsereGrundwerte } from "../../data"
import { Footer } from "../../blocks/Footer/Footer"
import { WhiteCard } from "../../ui/WhiteCard/WhiteCard"
import { OffiziellerPartner } from "../../blocks/OffiziellerPartner/OffiziellerPartner"
import { BaseCard } from "../../ui/BaseCard/BaseCard"


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
                        <BaseCard style="transparent" height="104px" width="284px" orientation="row">
                            <img src="UberPage\checkMark.png" alt="#" />
                            <p>Wirtschaftlich</p>
                        </BaseCard>

                        <BaseCard style="transparent" height="104px" width="284px" orientation="row">
                            <img src="UberPage\checkMark.png" alt="#"/>
                            <p>Zuverlässig</p>
                        </BaseCard>

                        <BaseCard style="transparent" height="104px" width="284px" orientation="row">
                            <img src="UberPage\checkMark.png" alt="#"/>
                            <p>Termintreu</p>
                        </BaseCard>

                        <BaseCard style="transparent" height="104px" width="284px" orientation="row">
                            <img src="UberPage\checkMark.png" alt="#"/>
                            <p>Perfekt</p>
                        </BaseCard>
                    </div>
                </div>
            </section>

            <section className="unsereGrundwerteContainer">
                <div className="unsereGrundwerteContainerTittle">
                    <h1>Unsere Grundwerte</h1>
                </div>

                <div className="unsereGrundwerteContainerText">
                    <p>Unser Ziel ist Ihre Zufriedenheit und Sorglosigkeit. Dabei hoffen wirauf Ihr Vertrauen,
                        welches wir nicht missbrauchen werden.
                    </p>
                </div>

                <div className="unsereGrundwerteListCard">

                    {
                        unsereGrundwerte.map((item, index) => {
                            return (
                                <WhiteCard key={index} row={2} text={item.text} icon={item.icon} titleColumn={true} title={item.title} />
                            )
                        })
                    }
                </div>

            </section>

            <section className="unsereMission">
                <img src="unsereMission.png" alt="#"/>
            </section>


            <OffiziellerPartner />

            <Footer></Footer>
        </>
    )
}