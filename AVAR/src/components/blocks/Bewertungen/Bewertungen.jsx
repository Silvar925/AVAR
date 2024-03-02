import "./Bewertungen.css"
import { BewertungenCard } from "../../ui/BewertungenCard/BewertungenCard"

export const Bewertungen = () => {
    return (
        <section className="bewertungenContainer">
            <div className="bewertungenContainer_background">
                <div className="bewertungenContainer_left">

                    <div className="bewertungenContainer_upper">
                        <p>Das Sagen Unsere Kunden Über Uns</p>
                        <hr />
                    </div>

                    <div className="bewertungenContainer_left_text">
                        <p>
                            ‘’Wir Haben Das Team Von AVAR Am Anfang Mit Ein Wenig Vorsicht Betrachtet,
                            Allerdings Haben Wir Schnell Gemerkt, Dass Es Erfahrene Jungs Sind,
                            Die Ihre Arbeit Kennen Und Diese Einfach Auf Einem Unglaublichen Niveau Und
                            Schnelligkeit Umsetzten. Im Moment Fehlt Das Geld Für Eine Zweite Wohnung, Allerdings,
                            Falls Unsere Familie Sich Entschließt Im Laufe Der Zeit Eine Zweite Zu Kaufen,
                            Werden Wir Uns Definitiv Für Eine Erneute Zusammenarbeit Mit Herrn Abakarov Von Team
                            AVAR Entscheiden. Danke Euch!’’
                        </p>
                        <p>Pia-Maria Wendtland</p>
                    </div> 


                </div>

                <div className="bewertungenContainer_right">
                    <BewertungenCard />
                    <BewertungenCard />
                    <BewertungenCard />
                </div>
            </div>


        </section>
    )
}