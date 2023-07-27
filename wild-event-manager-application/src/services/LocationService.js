const getLocations = async () => {
    const url = `${process.env.REACT_APP_GET_LOCATIONS}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw Error('Failed to deleated todo item!')
    }
    return await response.json()
  }

export {getLocations};