import styles from "./WhiteButton.module.css"

export const WhiteButton = (props) => {
    return (
        <a href="#" className={styles.whiteButton}>
            {props.text}
        </a>
    )
}