import React, { useState, useEffect } from "react";
import { fetchEvents } from "../../services/EventService";
import EventTitle from "./EventTitle";
import BackButton from "../buttons/BackButton"

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            try {
                const data = await fetchEvents();
                console.log('Fetched data: ', data);
                setEvents(data);
            } catch (error) {
                console.error("Error fetching events: ", error)
                setEvents([]);
            }
        }

        getEvents();
    }, [])


    return (
        <div>
            <BackButton />
            {events.map(event => (
                <EventTitle
                    key={event.id}
                    title={event.title}
                    startsAt={event.startsAt}
                    location={event.location}
                />
            ))}
        </div>
    )
}

export default Events;