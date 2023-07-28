import React from "react";
import EventTitle from "../event/EventTitle";

const Location = ({location}) => {
  return (
    <div className="location">
      <h2>{location.title}</h2>
      <p>{location.description}</p>
      {location.eventTitles.map((event, key) => (
                <EventTitle
                    key={key}
                    event={event}
                    showLocation={false}
                />
            ))}
    </div>
  );
};

export default Location;