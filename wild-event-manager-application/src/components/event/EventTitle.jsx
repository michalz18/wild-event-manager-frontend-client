import React from 'react';

const EventTitle = ({ title, startsAt, location }) => (
    <div>
        <span>{title}</span>
        <span>Starts At: {new Date(startsAt).toLocaleString()}</span>
        <span>Location: {location}</span>
    </div>
);

export default EventTitle;
