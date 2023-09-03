import React from "react";
import { Link } from "react-router-dom"
import './Map.scss';

const Marker = ({ children, feature }) => {
    console.log(feature.id)
    return (
      <button className="marker">
        {/* <Link to={`/location/${feature.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        </Link> */}
        {children}
      </button>
    );
  };

  export default Marker;