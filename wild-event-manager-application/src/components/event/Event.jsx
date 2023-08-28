import "./Event.scss"

const Event = ({ event }) => {
	return (
		<div className='card text-center m-5'>
			<div className='card-header d-flex justify-content-center'>
				<h2>{event.title}</h2>
			</div>
			<div className='card-body'>
				<h3>Location: {event.location}</h3>
				<p>{event.description}</p>
			</div>
			<div className='card-footer text-body-secondary mt-2'>
				<p className="data-text">Start: {event.startsAt}</p>
				<p>to: {event.endsAt}</p>
			</div>
		</div>
	)
}

export default Event
