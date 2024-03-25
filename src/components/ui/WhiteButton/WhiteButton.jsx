import styles from "./WhiteButton.module.css"

export const WhiteButton = (props) => {
    console.log(props.img)

    if (props.transparency === false) {
        return (
            <a href="#" className={styles.whiteButton}>
                {props.img !== undefined && <img src="Home/call.png" alt="#" />}
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