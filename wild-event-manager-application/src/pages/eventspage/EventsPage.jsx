import React from "react";
import { useMediaQuery } from "react-responsive";
import EventsList from "../../components/event/EventsList";
import EventsListDesktop from "../../components/event/EventsListDesktop";
import BackButton from "../../components/buttons//backButton/BackButton";
import "./EventsPage.scss";

const EventsPage = () => {
	const isDesktop = useMediaQuery({
		query: "(min-width: 768px)",
	})


	return (
		<div>
			{ isDesktop ? <EventsListDesktop /> : <EventsList /> }
			<BackButton />
		</div>
	)
}

export default EventsPage
