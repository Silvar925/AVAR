import styles from "./UnsereService.module.css"
import { cardImages } from "../../data"
import { unserseService } from "../../data"
import { UnserseServiceCard } from "../../ui/UnserseServiceCard/UnserseServiceCard"

export const UnsereServiceMobile = () => {
    return (
        <section className={styles.unsereServicesContainer}>

            <div className={styles.row}>
                <UnserseServiceCard text={unserseService[1]} count="01" backgroundImage={cardImages.card1} margin="-101px" />
                <div className={styles.unsereServicesContainer_right}>
                    <h1>
                        <span>UNSERE</span>
                        <span>SERVICE</span>
                    </h1>
                </div>
            </div>

            <div className={styles.row}>
                <UnserseServiceCard text={unserseService[2]} count="02" backgroundImage={cardImages.card2} margin="264px" />
                <UnserseServiceCard text={unserseService[3]} count="03" backgroundImage={cardImages.card3} margin="100px" />
            </div>

            <div className={styles.row}>
                <UnserseServiceCard text={unserseService[4]} count="04" backgroundImage={cardImages.card4} margin="629px" />
                <UnserseServiceCard text={unserseService[5]} count="05" backgroundImage={cardImages.card5} margin="464px" />
            </div>



        </section>
    )
}


export const UnserseService = () => {
    return (
        <>
            <section className={styles.unsereServicesContainer}>
                <div className={styles.unsereServicesContainer_left}>
                    <UnserseServiceCard text={unserseService[1]} count="01" backgroundImage={cardImages.card1} />
                    <UnserseServiceCard text={unserseService[2]} count="02" backgroundImage={cardImages.card2} margin="190px" />
                    <UnserseServiceCard text={unserseService[3]} count="03" backgroundImage={cardImages.card3} margin="72px" />
                    <UnserseServiceCard text={unserseService[4]} count="04" backgroundImage={cardImages.card4} margin="190px" />
                    <UnserseServiceCard text={unserseService[5]} count="05" backgroundImage={cardImages.card5} />
                </div>

                <div className={styles.unsereServicesContainer_right}>
                    <h1>
                        <span>UNSERE</span>
                        <span>SERVICE</span>
                    </h1>
                </div>

            </section>
        </>
    )
}