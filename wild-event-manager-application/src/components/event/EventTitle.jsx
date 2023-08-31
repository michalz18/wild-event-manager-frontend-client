import React from "react";
import { Link } from "react-router-dom";
import "./EventTitle.scss";

const EventTitle = ({ event, showLocation }) => {
    return (
        <div className='card text-center custom-card-size'>
            <Link to={`/event/${event.eventId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2 className='card-header'>{event.title}</h2>
            </Link>
            <div className='card-body'>
                <p>Starts At: {new Date(event.startsAt).toLocaleString()}</p>
                {showLocation && <h3>Location: {event.location}</h3>}
            </div>
        </div>
    )
}

export default EventTitle;
