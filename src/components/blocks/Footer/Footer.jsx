import styles from "./Footer.module.css"

export const Footer = () => {
    return (
        <footer>
            <div className={styles.schaffenPerfektion}>
                <div className={styles.schaffenPerfektion_title}>
                    <h2>AVAR</h2>
                    <p>Wir schaffen Perfektion</p>
                </div>

                <div className={styles.schaffenPerfektion_text}>
                    <p>
                        Wir sind Ihr starker Partner rund um Ihr Bauprojekt und des Innendesigns,
                        unterstützen Sie bei der Umsetzung Ihrer Ideen und machen Ihr Wunsch wahr.
                    </p>
                </div>

                <div className={styles.socialNetworks}>
                    <a href="#"><img src="socialNetwork/facebook.png" alt="#" /></a>
                    <a href="#"><img src="socialNetwork/twitter.png" alt="#" /></a>
                    <a href="#"><img src="socialNetwork/youtube.png" alt="#" /></a>
                    <a href="#"><img src="socialNetwork/instagram.png" alt="#" /></a>
                </div>
            </div>

            <div className={styles.rowF}>
                <div className={styles.kontaktInformationen}>
                    <div className={styles.kontaktInformationen_title}>
                        <h2>Kontakt Informationen</h2>
                    </div>

                    <div className={styles.kontaktInformationen_adress}>
                        <p>Aalborgring 4, 24109 Kiel</p>
                        <p>0431/72971683</p>
                        <p>0178/5029999</p>
                        <p>info@avar-kiel.de</p>
                    </div>
                </div>

                <div className={styles.kontaktInformationen}>
                    <div className={styles.schnelleLinks_title}>
                        <h2>Schnelle Links</h2>
                    </div>

                    <div className={styles.kontaktInformationen_adress}>
                        <p>Aalborgring 4, 24109 Kiel</p>
                        <p>0431/72971683</p>
                        <p>0178/5029999</p>
                        <p>info@avar-kiel.de</p>
                    </div>

                </div>

                <div className={styles.kontaktInformationen}>
                    <div className={styles.schnelleLinks_title}>
                        <h2>Unsere Leistungen</h2>
                    </div>

                    <div className={styles.kontaktInformationen_adress}>
                        <p>Interior Design</p>
                        <p>Sanierung</p>
                        <p>Trockenbau</p>
                        <p>Bodenbelag</p>
                    </div>

                </div>
            </div>



        </footer>
    )
}