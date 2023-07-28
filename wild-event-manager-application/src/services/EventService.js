const getTodayEvents = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_GET_TODAY_EVENTS}`);
        if (!response.ok) {
            throw new Error("Problem occured with fetching today events!")
        } 
        return await response.json();
    } catch (error) {
        console.error("Events cannot be downloaded!")
    }
}

const getEventById = async (id) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_GET_EVENT}${id}`);
        if (!response.ok) {
            throw new Error("Problem occured with fetching event!")
        } 
        return await response.json();
    } catch (error) {
        console.error("Event cannot be downloaded!")
    }
}

export {getTodayEvents, getEventById};