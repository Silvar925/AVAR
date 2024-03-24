import styles from "./RedButton.module.css"

export const RedButton = (props) => {
    return (
        <a href={props.href} className={styles.redButton}>{props.text}</a>
    )
}