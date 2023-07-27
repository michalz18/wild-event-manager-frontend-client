//ten komponent znajduje się wewnątrz mapy - jest to jedna konkretna lokacja, jest kółkiem i ma link
import React from "react";
import { Link } from "react-router-dom";
import { CircleMarker } from "react-leaflet";

const LocationPoint = ({ location }) => {
  const { id, coordinateX, coordinateY } = location;

  return (
    <Link to={`/location/${id}`} style={{ textDecoration: "none" }}>
      <CircleMarker
        center={[coordinateX, coordinateY]}
        radius={10}
        color="blue"
        fillOpacity={0.7}
      />
    </Link>
  );
};

export default LocationPoint;