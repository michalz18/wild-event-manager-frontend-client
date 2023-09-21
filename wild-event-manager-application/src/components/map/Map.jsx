import React, { useEffect, useState, useRef } from "react";
import { createRoot } from 'react-dom/client';
import mapboxgl from 'mapbox-gl';
import getMap from "../../services/MapService";
import Marker from "./Marker"
import './Map.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"

const Map = () => {

  const [mapData, setMap] = useState(null);
  const mapContainerRef = useRef(null);
   mapboxgl.accessToken = `${process.env.REACT_APP_API_KEY}`;
   const navigate = useNavigate();

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
      center: [mapData.coordinate.longitude, mapData.coordinate.latitude],
      zoom: mapData.zoom,
      bearing: mapData.bearing
    }, []);
    mapData.locations.forEach((feature) => {
      const navigateMark = () => navigate(`/location/${feature.id}`);
      const ref = React.createRef();
      ref.current = document.createElement('div');
      createRoot(ref.current).render(<Marker feature={feature} nav={navigateMark}></Marker>);
      new mapboxgl.Marker(ref.current)
        .setLngLat([feature.longitude, feature.latitude])
        .addTo(map);
    });
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    return () => map.remove();
}}, [mapData, navigate]);

  return <div className="map-container" ref={mapContainerRef} />;
};


export default Map;

