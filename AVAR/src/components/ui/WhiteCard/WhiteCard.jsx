import styles from "./WhiteCard.module.css"

export const WhiteCard = (props) => {
    let rowCard = {}
    let title = {}
    let sizeCard = {}

    if (props.titleColumn === true) {
        title = {
            display: "flex", alignItems: "center", width: "370px", justifyContent: "space-between"
        }
        
        sizeCard = {
            width: "383px", height: "142px"
        }

    } else {
        title = {
            display: "flex", alignItems: "center", justifyContent: "center"
        }
    }

    if (props.row === 1) {
        rowCard = {
            justifyContent: "space-between",
        }
    } else if (props.row >= 2) {
        rowCard = {
            flexDirection: "column",
            gap: "10px",
            alignItems: "center"
        }
    }

    return (
        <div className={styles.card} style={{...sizeCard}}>
            <div style={{ ...title }}>

                {
                    props.titleColumn === true &&
                    <h3 className={styles.title}>{props.title}</h3>
                }

                <img src={props.icon} alt="#" />
            </div>

            {
                props.row === 1 &&
                <img src={props.icon} alt="#" />

            }

            <p >{props.text}</p>


        </div >
    )
}