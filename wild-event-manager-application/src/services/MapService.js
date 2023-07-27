const getMap = async () => {
    const url = `${process.env.REACT_APP_GET_MAP}`;
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  }

export default getMap;