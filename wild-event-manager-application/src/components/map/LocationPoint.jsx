
import React from "react";
import { Link } from "react-router-dom";

const LocationPoint = ({ locationPoint }) => {
  const { id, coordinateX, coordinateY } = locationPoint;

  return (
    <Link to={`/location/${id}`} style={{ textDecoration: "none" }}>
      <div>Location id: {id}</div>
    </Link>
  );
};

export default LocationPoint;