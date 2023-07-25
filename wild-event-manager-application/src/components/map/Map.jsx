//komponent zbiorczy widoku mapy - mają się tutaj znaleźć: obrazek oraz lista miejsc
import React from "react";

const Map = () => {
    return (
        <div>
            This is map
            <h2>{process.env.REACT_APP_SECRET_KEY}</h2>
        </div>
    )
}

export default Map;