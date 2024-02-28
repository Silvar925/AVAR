import styles from "./UnserseServiceCard.module.css"

export const UnserseServiceCard = (props) => {
    return (
        <div className={styles.card} style={{ backgroundImage: props.backgroundImage, marginTop: props.margin }}>
            <h2>{props.text}</h2>
            <h1>{props.count}</h1>
        </div>
    )
}