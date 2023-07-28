import React, { useState, useEffect } from "react";
import {getTodayEvents} from "../../services/EventService"
import EventTitle from "./EventTitle";

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            try {
                const data = await getTodayEvents();
                setEvents(data);
            } catch (error) {
                setEvents([]);
            }
        }
        getEvents();
    }, [])


    return (
        <div>
            {events.map((event, key) => (
                <EventTitle
                    key={key}
                    event={event}
                    showLocation={true}
                />
            ))}
        </div>
    )
}

export default Events;