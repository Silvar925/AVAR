import styles from "./WhiteButton.module.css"

export const WhiteButton = (props) => {

    if (props.transparency === false) {
        return (
            <a href="#" className={styles.whiteButton}>
                <img src={props.icon} alt="#" />
                {props.text}
            </a>
        )
    } else {
        return (
            <a href="#" className={styles.whiteButtonTransparency}>
                {props.text}
            </a>
        )
    }


}