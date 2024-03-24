import style from "./TranslucentCard.module.css"

export const TranslucentCard = (props) => {
    let styles = {}
    let tittleStyle = {}
    let h1 = {}

    if (props.orientation === "row") {
        styles = {
            width: "301px",
            height: "203px"
        }

        h1 = {
            fontSize: "min(36px)"
        }

        if (window.innerWidth >= 320 && window.innerWidth <= 435) {
            styles = {
                height: "150px",
                width: "200px"
            }
        }


    } else if (props.orientation === "column") {
        styles = {
            width: "283px",
            minHeight: "153px",
            padding: "20px"
        }

        tittleStyle = {
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
        }

        h1 = {
            fontSize: "30px",
        }


    }

    return (
        <div className={style.card} style={{ ...styles }}>
            {
                props.orientation === "row" &&
                <h1 style={{...h1}}>{props.tittle}</h1>
            }

            {
                props.orientation === "column" &&
                <div style={{ ...tittleStyle }}>
                    <h1 style={{ ...h1 }}>{props.tittle}</h1>
                    <h1 style={{ ...h1 }}>{props.subtitle}</h1>
                </div>
            }


            <p>{props.text}</p>
        </div >
    )
}