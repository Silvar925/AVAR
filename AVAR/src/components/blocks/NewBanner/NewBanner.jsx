import { Header } from "../../ui/Header/Header"
import styles from "./NewBanner.module.css"

export const NewBanner = () => {
    return (
        <div className={styles.Banner} style={{backgroundImage: "url(banners/homeBanner.png)"}}>
            <Header />
        </div>
    )
}