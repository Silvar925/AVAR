import styles from "./Banner.module.css"
import { Header } from "../../ui/Header/Header"
import { TranslucentButton } from "../../ui/Header/Buttons/TranslucentButton/TranslucentButton"


export const Banner = (props) => {
    let info = props.info
    let backgroundPositionStyle = {};

    if (window.innerWidth >= 320 && window.innerWidth <= 435) {
        if (props.backgroundImage === "Home") {
            backgroundPositionStyle = {
                backgroundPosition: '-392px 728px'
            };
        } else if (props.backgroundImage === "Uber") {
            backgroundPositionStyle = {
                backgroundPosition: '-711px 728px'
            }
        } else if (props.backgroundImage === "Service") {
            backgroundPositionStyle = {
                backgroundPosition: '-597px 820px'
            }
        }
    }

    return (
        <section className={styles.bannerContainer}
            style={{ backgroundImage: info.image, ...backgroundPositionStyle }}>

            <Header />

            <div className={styles.textContainer}>

                <div className={styles.textContainerUp}>

                    <div className={styles.temp}>
                        <div>
                            <div className={styles.title}>
                                <h1>{info.title}</h1>
                            </div>

                            <div className={styles.text}>
                                <p>{info.text}</p>
                            </div>

                            {
                                props.type === "buttons" &&
                                <div className={styles.buttonsContainer}>
                                    <TranslucentButton title="Kostenlose Beratung gewünscht?" />
                                    <TranslucentButton title="Unsere Dienstleistungen" />
                                </div>
                            }

                        </div>

                        {
                            props.type === "additionalText" &&
                            <div className={styles.additionalText}>
                                {info.additionalText}
                            </div>
                        }


                    </div>

                    {
                        props.type === "additionalImage" &&
                        <div className={styles.additionalImage}>
                            <img src="banners/humanKontakt.png" alt="#" />
                        </div>
                    }

                </div>



                {
                    props.type === "buttons" &&
                    <div className={styles.socialNetwork}>
                        <div className={styles.address}>
                            <img src="socialNetwork/gps.png" alt="#" />
                            <p>Aalborgring 4, 24109 Kiel</p>
                        </div>

                        <div className={styles.iconsContainer}>
                            <img src="socialNetwork/facebook.png" alt="facebook" />
                            <img src="socialNetwork/twitter.png" alt="twitter" />
                            <img src="socialNetwork/youtube.png" alt="youtube" />
                            <img src="socialNetwork/instagram.png" alt="instagram" />
                        </div>

                    </div>
                }


            </div>


        </section>
    )
}