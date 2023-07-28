import React from 'react';
import { Link } from 'react-router-dom';

const EventTitle = ({ event, showLocation }) => (
    <div>
        <Link to={`/event/${event.eventId}`}>
        <span>{event.title}</span>
        <span>Starts At: {new Date(event.startsAt).toLocaleString()}</span>
        {showLocation && <span>Location: {event.location}</span>}
        </Link>
    </div>
);

export default EventTitle;
