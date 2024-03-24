import styles from "./BaseCard.module.css"

export const BaseCard = (props) => {
    if (props.style === "transparent") {
        return (
            <div className={styles.transparentCard} style={{ width: props.width, height: props.height, flexDirection: props.orientation }}>
                {props.children}
            </div>
        )
    } else if (props.style === "white") {
        return (
            <div className={styles.whiteCard} style={{ width: props.width, height: props.height, flexDirection: props.orientation }}>
                {props.children}
            </div>
        )
    }

}