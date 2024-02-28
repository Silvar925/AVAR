import { bannerInfo } from "../../data"
import { Banner } from "../../ui/Banner/Banner"
import styles from "./Projekte.module.css"

export const Projekte = () => {
    return (
        <>
            <Banner info={bannerInfo.Projekte} type="slider" backgroundImage="Home" />
        </>
    )
}