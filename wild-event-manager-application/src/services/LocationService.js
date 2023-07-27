const API_URL = "http://localhost:8080"

const fetchLocationById = async id => {
	
	try {
		const response = await fetch(`${API_URL}/location/${id}`)
		if (!response.ok) {
			throw new Error("Failed to fetch location")
		}
    return await response.json();
	} catch (error) {
		console.error("Error fetching location:", error)
		throw error
	}
}

export default fetchLocationById;