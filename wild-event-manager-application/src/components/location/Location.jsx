import React from "react"
import EventTitle from "../event/EventTitle"
import "./Location.scss"

const Location = ({ location }) => {
	return (
		<>
			<div className='location-text'>
				<h3 className='title-location'>{location.title}</h3>
				<p className='description-locationt text-center ms-5 me-5'>{location.description}</p>
			</div>
			<div className='d-flex flex-column justify-content-center mx-5 da'>
				<div
					id='carouselExampleDark'
					className='carousel carousel-dark slide carousel-centered'
					data-bs-ride='carousel'>
					<div className='carousel-indicators'>
						{location.eventTitles.map((_, index) => (
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
						{location.eventTitles.map((event, index) => (
							<div
								className={`carousel-item mb-3 ${index === 0 ? "active" : ""}`}
								key={index}>
								<EventTitle event={event} showLocation={false} />
							</div>
						))}
					</div>
					<button
						className='carousel-control-prev'
						type='button'
						data-bs-target='#carouselExampleDark'
						data-bs-slide='prev'>
						<span
							className='carousel-control-prev-icon'
							aria-hidden='true'></span>
						<span className='visually-hidden'>Previous</span>
					</button>
					<button
						className='carousel-control-next'
						type='button'
						data-bs-target='#carouselExampleDark'
						data-bs-slide='next'>
						<span
							className='carousel-control-next-icon'
							aria-hidden='true'></span>
						<span className='visually-hidden'>Next</span>
					</button>
				</div>
			</div>
		</>
	)
}

export default Location
