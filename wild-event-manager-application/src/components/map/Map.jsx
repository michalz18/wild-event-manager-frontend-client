//komponent zbiorczy widoku mapy - mają się tutaj znaleźć: obrazek oraz lista miejsc
import React from "react";
// import LocationPoint from '../components/map/LocationPoint';


const Map = (locations) => {
    return (
        <div>
            This is map
            <h2>{process.env.REACT_APP_SECRET_KEY}</h2>
            {/* {locations.map((location) => (
                <LocationPoint key={location.id} location={location} />
            ))}; */}
        </div>
    )
}

export default Map;