import React from "react";
import { Link } from "react-router-dom"

const EventsButton = () => {
    return (
        <Link to={'/events'}>
        <button type="button" style={{ zIndex: 4, position: 'absolute' }}>
            This is Events Button
        </button>
        </Link>
    )
}

export default EventsButton;