import styles from "./Bewertungen.module.css"

export const BewertungenCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card_icon}>
                <img src="Home/quotationMarks.png" alt="#" />
            </div>

            <div className={styles.card_text}>
                <p>
                    ‘’Das Unternehmen AVAR hat unsere Bungalow Saniert und wir sind Begeistert.
                    Klar hat es ein wenig die Tasche leer geräumt, aber so ist das halt bei einer Kernsanierung.
                    Ich bedanke mich für eure Hilfe und werde euch definitiv weiterempfehlen’’
                </p>
                <p>Olaf Stolz</p>
            </div>
        </div>
    )
}