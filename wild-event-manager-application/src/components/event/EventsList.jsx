import React, { useState, useEffect } from "react"
import { getTodayEvents } from "../../services/EventService"
import EventCard from "./EventCard"
import "./EventsList.scss"

const EventsList = () => {
	const [events, setEvents] = useState([])

	useEffect(() => {
		const getEvents = async () => {
			try {
				const data = await getTodayEvents()
				setEvents(data)
			} catch (error) {
				setEvents([])
			}
		}
		getEvents()
	}, [])

	return (
		<div className='d-flex flex-column justify-content-center mx-5'>
			<div
				id='carouselExampleDark'
				className='carousel carousel-dark slide carousel-centered'
				data-bs-ride='carousel'>
				<div className='carousel-indicators'>
					{events.map((_, index) => (
						<button
							key={index}
							type='button'
							data-bs-target='#carouselExampleDark'
							data-bs-slide-to={index}
							className={index === 0 ? "active" : ""}
							aria-current={index === 0 ? "true" : undefined}
							aria-label={`Slide ${index + 1}`}></button>
					))}
				</div>
				<div className='carousel-inner'>
					{events.map((event, index) => (
						<EventCard key={index} event={event} isActive={index === 0} />
					))}
				</div>
				<button
					className='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExampleDark'
					data-bs-slide='prev'>
					<span
						className='carousel-control-prev-icon arrow'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next arrow'
					type='button'
					data-bs-target='#carouselExampleDark'
					data-bs-slide='next'>
					<span
						className='carousel-control-next-icon arrow'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</div>
	)
}

export default EventsList
