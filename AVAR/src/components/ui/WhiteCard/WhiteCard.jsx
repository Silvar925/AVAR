import styles from "./WhiteCard.module.css"

export const WhiteCard = (props) => {
    let rowCard = {}
    let title = {}
    let sizeCard = {}

    let centerStyle = {}

    let image = {}

    if (props.titleColumn === true) {
        title = {
            display: "flex", alignItems: "center",
            width: "270px",
            justifyContent: "space-between"
        }

    } else {
        title = {
            display: "flex", alignItems: "center", justifyContent: "center",
        }

        sizeCard = {
            // width: "383px", height: "142px"
        }
    }

    if (props.row === 1) {
        rowCard = {
            flexDirection: "row",
            alignItems: "center",
            width: "230px"
        }

        image = {
            width: "25px",
            height: "25px"
        }
    }

    if (props.center === true) {
        centerStyle = {
            justifyContent: "center"
        }
    }


    return (
        <div className={styles.card} style={{ ...sizeCard, ...rowCard, ...centerStyle }}>
            <div style={{ ...title }}>

                {
                    props.titleColumn === true &&
                    <h3 className={styles.title}>{props.title}</h3>
                }

                <img src={props.icon} alt="#" style={{...image}}/>

            </div>

            <p >{props.text}</p>


        </div >
    )
}