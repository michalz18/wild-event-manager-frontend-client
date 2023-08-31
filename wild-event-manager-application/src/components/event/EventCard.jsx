import React from "react"
import { Link } from "react-router-dom"
import "./EventCard.scss"

const EventCard = ({ event, isActive }) => {
	return (
		<div
			className={`carousel-item ${isActive ? "active" : ""}`}
			data-bs-interval='5000'>
			<div className='card text-center'>
				<Link to={`/event/${event.eventId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
					<h2 className='card-header'>{event.title}</h2>
				</Link>
				<div className='card-body'>
					<p>Starts At: {new Date(event.startsAt).toLocaleString()}</p>
					<h3>Location: {event.location}</h3>
				</div>
			</div>
		</div>
	)
}

export default EventCard
