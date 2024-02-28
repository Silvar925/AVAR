import "./OffiziellerPartner.css"
import { RedButton } from "../../ui/RedButton/RedButton"
import { WhiteButton } from "../../ui/WhiteButton/WhiteButton"


export const OffiziellerPartner = () => {
    return (
        <section className="offiziellerPartnerContainer">
            <div className="offiziellerPartnerContainer_title">
                <h1>Offizieller Partner Der Postank</h1>
            </div>

            <img src="Home/postbank.png" alt="postbankico" className="temp"/>

            <div className="offiziellerPartnerContainer_card">
                <div className="offiziellerPartnerContainer_card_left">
                    <div className="offiziellerPartnerContainer_card_left_title">
                        <h2>Kostenlose Beratung Sichern</h2>
                    </div>

                    <div className="offiziellerPartnerContainer_card_left_text">
                        <p>
                            Sichern Sie sich jetzt kostenlos und unverbindlich eine Beratung vonAVAR und
                            lassen Sie sich überzeugen von unseren Visionen und derenUmsetzungsideen.
                            Wir schaffen Perfektion!
                        </p>
                    </div>

                    <div className="offiziellerPartnerContainer_card_left_buttons">
                        <RedButton text="Kostenlose Beratung Sichern" />
                        <WhiteButton text="Rufen Sie uns an" />
                    </div>

                </div>

                <div className="offiziellerPartnerContainer_card_right">
                    <img src="Home/Vector.png" alt="#" />
                </div>

            </div>

        </section>
    )
}

