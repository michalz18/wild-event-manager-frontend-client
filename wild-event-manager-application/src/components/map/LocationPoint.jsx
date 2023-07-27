const LocationPoint = ({ locationPoint }) => {

    return (
        <div>
            <h2>Id: {locationPoint.id}</h2>
            <p>CoorX:{locationPoint.coordinateX}</p>
            <p>CoorY:{locationPoint.coordinateY}</p>
        </div>
    )
}

export default LocationPoint;