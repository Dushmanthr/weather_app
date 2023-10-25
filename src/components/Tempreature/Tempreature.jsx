import React from 'react';
import Sun from '../../assets/remove_sun.png';
import { BsArrowUpShort } from 'react-icons/bs';
import { BsArrowDownShort } from 'react-icons/bs';
import { FaTemperatureLow } from 'react-icons/fa';
import { BiDroplet } from 'react-icons/bi';
import { BiWind } from 'react-icons/bi';
import { BiSun } from 'react-icons/bi';
import { WiSunset } from 'react-icons/wi';

const Tempreature = ({ weatherData }) => {
  // Check if weatherData exists before using it
  if (!weatherData) {
    return null; // Render nothing if weather data is not available yet
  }

  const { main, wind, sys } = weatherData;
  const { temp, feels_like, humidity } = main;
  const { speed } = wind;
  const { sunrise, sunset } = sys;

  // Format sunrise and sunset times
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        {weatherData.weather[0].description}
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={Sun} alt="" className="w-20" />

        <p className="text-5xl">{temp}°C</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureLow size={20} className="mr-1" />
            Real Feel:
            <span className="font-medium ml-1">{feels_like}°C</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <BiDroplet size={20} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{humidity}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <BiWind size={20} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{speed} Km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <BiSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">{sunriseTime}</span>
        </p>
        <p className="font-light"></p>
        <WiSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">{sunsetTime}</span>
        </p>
        <p className="font-light"></p>
        {/* <BsArrowUpShort />
        <p className="font-light">
          High: <span className="font-medium ml-1">39°</span>
        </p>
        <p className="font-light"></p>
        <BsArrowDownShort />
        <p className="font-light">
          Low: <span className="font-medium ml-1">23°</span>
        </p> */}
        <p className="font-light"></p>
      </div>
    </div>
  );
};

export default Tempreature;
