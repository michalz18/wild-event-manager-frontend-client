import React from "react";
import { Link } from "react-router-dom"

const EventsButton = () => {
    return (
        <div>
            <Link to="/events">
                <button type="button">This is Events Button</button>
            </Link>
        </div>
    )
}

export default EventsButton;