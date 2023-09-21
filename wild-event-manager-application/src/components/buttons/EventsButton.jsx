import React from "react"
import { Link } from "react-router-dom"
import "./EventsButton.scss"

const EventsButton = () => {
	return (
		<Link to={"/events"}>
			<button
				className='EventsButton'
				type='button'
				style={{ zIndex: 4, position: "absolute" }}>
				Today's Events
			</button>
		</Link>
	)
}

export default EventsButton
