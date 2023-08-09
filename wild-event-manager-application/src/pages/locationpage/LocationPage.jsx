import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchLocationById } from "../../services/LocationService";
import LoadingPage from "../loadingpage/LoadingPage";
import Location from "../../components/location/Location";
import BackButton from "../../components/buttons/backButton/BackButton";

const LocationPage = () => {
	const { id } = useParams()
	const [location, setLocation] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		fetchLocationById(id)
			.then(locationData => {
				setLocation(locationData)
				setLoading(false)
			})
			.catch(error => {
				console.error("Error fetching location:", error)
				setLoading(false)
			})
	}, [id])

	if (loading) {
		return <LoadingPage />
	}

	return (
		<div>
			<Location location={location} />
			<BackButton></BackButton>
		</div>
	)
}
export default LocationPage
