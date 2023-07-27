const getMap = async () => {
    const url = 'http://localhost:8080/map'
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  }

export default getMap;