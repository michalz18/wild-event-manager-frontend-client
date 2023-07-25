import React, { useState, useEffect } from 'react';
import Event from '../components/event/Event'
import { useParams } from 'react-router-dom';


const EventPage = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const PATH = 'event/';

    const getUrl = () => {
        return `${process.env.REACT_APP_BACKEND_URL}${PATH}${id}`;
    }
    const fetchEvent = async () => {
        const response = await fetch(getUrl());
        if (!response.ok) {
            throw Error('Failed to fetch the event!');
        }
        const data = await response.json();
        setEvent(data);
    }

    useEffect(() => {
        fetchEvent();
    }, [id]);

    return (
        <div>
            {event && (
                <Event event={event} />
            )}
        </div>
    )
}

export default EventPage;