import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import { getTodayEvents } from "../../services/EventService"
import EventCard from "./EventCard"
import "./EventsListDesktop.scss";

const EventsDesktop = () => {
	const [events, setEvents] = useState([])

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const fetchedEvents = await getTodayEvents()
				setEvents(fetchedEvents)
			} catch (error) {
				setEvents([])
			}
		}

		fetchEvents()
	}, [])

	return (
		<Row className='mx-5 mt-5 events-position'>
			{events.map((event, index) => (
				<Col key={index} md={12} lg={6} xxl={4} className='p-3'>
					<EventCard event={event} isActive={true} />
				</Col>
			))}
		</Row>
	)
}

export default EventsDesktop
