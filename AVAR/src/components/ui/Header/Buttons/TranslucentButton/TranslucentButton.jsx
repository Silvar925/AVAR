import styles from "./TranslucentButton.module.css"

export const TranslucentButton = (props) => {
    return (
        <a href="#" className={styles.a}>{props.title}</a>
    )
}