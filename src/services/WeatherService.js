const API_KEY = "947bfdb24fde954fa5a8c6039f15ccbe";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = async (latitude, longitude, infoType) => {
  const queryParams = {
    lat: latitude,
    lon: longitude,
    appid: API_KEY,
    units: "metric", // You can change the units as needed
  };

  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams(queryParams);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
};

export default getWeatherData;
