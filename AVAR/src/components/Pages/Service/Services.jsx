import "./Services.css"
import { bannerInfo } from "../../data"
import { Banner } from "../../ui/Banner/Banner"
import { sieWollenEinAngebot } from "../../data"
import { WhiteCard } from "../../ui/WhiteCard/WhiteCard"


export const ServicesPage = () => {
    return (
        <>
            <Banner info={bannerInfo.Service} type="additionalText" backgroundImage="Service" />

            <section className="cardList">
                <WhiteCard />
            </section>
        </>
    )
}