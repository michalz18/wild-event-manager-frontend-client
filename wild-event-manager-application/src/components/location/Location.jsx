import React from "react";

const Location = ({ title, description }) => {
  return (
    <div className="location">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Location;