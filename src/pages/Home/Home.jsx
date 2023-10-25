import React, { useEffect, useState } from 'react';
import SearchDiv from '../../components/SearchDiv/SearchDiv';
import TimeNLocation from '../../components/TimeNLocation/TimeNLocation';
import Tempreature from '../../components/Tempreature/Tempreature';
import Forecast from '../../components/Forecast/Forecast';
import getWeatherData from '../../services/WeatherService';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  // Define the handleSearch function to update the weather data in the state
  const handleSearch = async (latitude, longitude) => {
    try {
      const currentData = await getWeatherData(latitude, longitude, 'weather');
      const forecastData = await getWeatherData(latitude, longitude, 'forecast');
      console.log(currentData);
      console.log(forecastData);

      setWeatherData(currentData);
      setForecastData(forecastData);
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Coordinates for Colombo, Sri Lanka
        const latitude = 6.9271;
        const longitude = 79.8612;
        const currentData = await getWeatherData(latitude, longitude, 'weather');
        const forecastData = await getWeatherData(latitude, longitude, 'forecast');
        console.log(currentData);
        console.log(forecastData);

        // Set the weather data in the state
        setWeatherData(currentData);
        setForecastData(forecastData);
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className='mx-auto max-w-screen-md mt-2 py-3 px-32 bg-gradient-to-br from-cyan-700 h-fit shadow-xl shadow-gray-400'> 
      <SearchDiv onSearch={handleSearch} />
      <TimeNLocation weatherData={weatherData} />
      <Tempreature weatherData={weatherData} />
      <Forecast title='5-Day Forecast' forecastData={forecastData} />
    </div>
  );
};

export default Home;
