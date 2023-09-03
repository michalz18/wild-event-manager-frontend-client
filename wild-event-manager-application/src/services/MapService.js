const getMap = async () => {
    const url = `${process.env.REACT_APP_GET_MAP}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw Error('Failed to fetch map!')
  }
    return await response.json();
  }

export default getMap;