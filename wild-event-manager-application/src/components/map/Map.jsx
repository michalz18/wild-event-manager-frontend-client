import React, { useEffect, useState, useRef } from "react";
import { createRoot } from 'react-dom/client';
import mapboxgl from 'mapbox-gl';
import getMap from "../../services/MapService";
import Marker from "./Marker"
import './Map.scss';

const Map = () => {

  const [mapData, setMap] = useState(null);
  const mapContainerRef = useRef(null);
   mapboxgl.accessToken = `${process.env.REACT_APP_API_KEY}`;

  async function fetchMap() {
    const mapData = await getMap();
    setMap(mapData);
  }

  useEffect(() => {
    fetchMap();
  }, []);
  
  useEffect(() => {
    if (mapData) {
      const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [mapData.coordinate.latitude, mapData.coordinate.longitude],
      zoom: mapData.zoom,
      bearing: mapData.bearing
    }, []);
    mapData.locations.forEach((feature) => {
      const ref = React.createRef();
      ref.current = document.createElement('div');
      createRoot(ref.current).render(<Marker feature={feature} />);
      new mapboxgl.Marker(ref.current)
        .setLngLat([feature.longitude, feature.latitude])
        .addTo(map);
    });
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    return () => map.remove();
}}, [mapData]);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;

