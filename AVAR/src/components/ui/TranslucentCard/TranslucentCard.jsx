import style from "./TranslucentCard.module.css"

export const TranslucentCard = (props) => {
    let styles = {}

    if (props.orientation === "row") {
        styles = {
            flexDirection: "column",
            // width: "301px",
            // height: "203px"
        }
    } else if (props.orientation === "column") {
        styles = {
            flexDirection: "row",
            width: "283px",
            height: "104px"
        }
    }

    return (
        <div className={style.card} style={{...styles}}>
            {
                props.orientation === "row" &&
                <h1>{props.tittle}</h1>
            }

            {
                props.orientation === "column" &&
                <img src="UberPage/checkMark.png" alt="#" />
            }

            <p>{props.text}</p>
        </div>
    )
}