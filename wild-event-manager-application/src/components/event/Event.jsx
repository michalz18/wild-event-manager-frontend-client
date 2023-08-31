import Card from "react-bootstrap/Card"
import "./Event.scss"

const Event = ({ event }) => {
	return (
		<div className='event-position'>
			<Card className='text-center m-5 size-card'>
				<Card.Header className='d-flex justify-content-center'>
					<h2>{event.title}</h2>
				</Card.Header>
				<Card.Body>
					<h3>Location: {event.location}</h3>
					<p>{event.description}</p>
				</Card.Body>
				<Card.Footer className='text-body-secondary mt-2'>
					<p className='data-text'>Start: {event.startsAt}</p>
					<p>to: {event.endsAt}</p>
				</Card.Footer>
			</Card>
		</div>
	)
}

export default Event
