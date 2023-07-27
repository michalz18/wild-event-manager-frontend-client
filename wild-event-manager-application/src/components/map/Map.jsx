import React, { useEffect, useState } from "react";
import getMap from "../../services/MapService";
import { getLocations } from "../../services/LocationService";
import { Link } from "react-router-dom";
import LocationPoint from "./LocationPoint.jsx"

const Map = () => {
  const [imageSource, setImageSource] = useState(null);
  const [locationPoints, setLocationPoints] = useState(null)

  async function getLocationPoints() {
    const locations = await getLocations();
    setLocationPoints(locations);
  }

  async function getImageSource() {
    const blob = await getMap();
    const imageSource = URL.createObjectURL(blob);
    setImageSource(imageSource);
  }

  useEffect(() => {
    getLocationPoints();
    getImageSource();
  }, []);

  return (
    <div>
      {imageSource && locationPoints 
        ? <div>
            <img src={imageSource} alt="Map_of_event" />
            <div>
            {locationPoints.map((location) => (
            <Link to={`/location/${location.id}`}>
                <LocationPoint locationPoint={location}></LocationPoint>
            </Link>))}

            </div>
        </div>
        : <p>Loading...</p>}
    </div>
  );
};

export default Map;

