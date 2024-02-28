import { Banner } from "../../ui/Banner/Banner"
import styles from "./Kontaktieren.module.css"
import { bannerInfo } from "../../data"

export const Kontaktieren = () => {
    return (
        <>
            <Banner info={bannerInfo.Kontakt} type="additionalImage" backgroundImage="Home" />
        </>
    )
}