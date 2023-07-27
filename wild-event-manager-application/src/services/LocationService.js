const API_URL = "http://localhost:8080"

const getLocations = async () => {
    const url = `${process.env.REACT_APP_GET_LOCATIONS}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw Error('Failed to deleated todo item!')
    }
    return await response.json()
  }

const fetchLocationById = async (id) => {
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

export {getLocations, fetchLocationById};





