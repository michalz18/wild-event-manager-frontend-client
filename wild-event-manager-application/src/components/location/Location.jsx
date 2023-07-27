//komponent ten zawiera: tytuł, opis, zdjęcie? oraz listę komponentów EventTitle.jsx
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