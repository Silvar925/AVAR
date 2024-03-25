import { BaseCard } from "../BaseCard/BaseCard";
import { useState } from "react";

export const WarumCard = ({ text, alternativeText, img }) => {
    const [textV, setTextV] = useState(text)

    const cardClickHandler = () => {
        setTextV(textV === text ? alternativeText : text);
    }

    return (
        <BaseCard style="white" width="403px" height="214px" onClick={cardClickHandler}>
            <img src={img} alt="#" />
            <p>{textV}</p>
        </BaseCard>
    )
}