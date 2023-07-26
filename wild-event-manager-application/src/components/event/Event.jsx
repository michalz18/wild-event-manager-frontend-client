// tutaj będzie się znajdować głębszy opis eventu


const Event = ({ event }) => {

    return (
        <div>
            <h2>Title: {event.title}</h2>
            <p>Date:{event.startsAt}  to: {event.endsAt}</p>
            <p>Description: {event.description} </p>
            <p>Location: {event.location} </p>
        </div>
    )
}

export default Event;