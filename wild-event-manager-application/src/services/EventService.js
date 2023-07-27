export const fetchEvents = async () => {
    try {
        const response = await fetch("http://localhost:8080/event/today");
        if (!response.ok) {
            throw new Error("Problem occured with fetching today events!")
        } 
        return await response.json();
    } catch (error) {
        console.error("Events cannot be downloaded!")
    }
}