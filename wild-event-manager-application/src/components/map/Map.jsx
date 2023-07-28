import React, { useEffect, useState } from "react";
import getMap from "../../services/MapService";
import { getLocations } from "../../services/LocationService";
import LocationPoint from "./LocationPoint.jsx"

const Map = () => {
  const [imageSource, setImageSource] = useState(null);
  const [locationPoints, setLocationPoints] = useState(null)

  useEffect(() => {
    async function getLocationPoints() {
        const locations = await getLocations();
        setLocationPoints(locations);
    }
    
    async function getImageSource() {
        const blob = await getMap();
        const imageSource = URL.createObjectURL(blob);
        setImageSource(imageSource);
    }
    getLocationPoints();
    getImageSource();
  }, []);

  return (
    <div>
      {imageSource && locationPoints
        ? <div>
            <img src={imageSource} alt="Map_of_event" />
            <div>
                {locationPoints.map((location, key) => (
                <LocationPoint key={key} locationPoint={location}></LocationPoint>))}
            </div>
          </div>
        : <p>Loading...</p>}
        
    </div>
  );
};

export default Map;

