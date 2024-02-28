import styles from "./UnsereAusgewahltenCard.module.css"

export const UnsereAusgewahltenCard = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.images} alt="#" />

            <div className={styles.info}>
                <h1>{props.tittle}</h1>
                <p>{props.text}</p>
            </div>

        </div>
    )
}