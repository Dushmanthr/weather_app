import React from 'react';
import Sun from "../../assets/remove_sun.png";

const Forecast = ({ title, forecastData }) => {
  const filteredForecastData = filterDailyForecast(forecastData);

  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2' />
      <div className='flex flex-row items-center justify-between text-white'>
        {filteredForecastData.map((item, index) => (
          <div className='flex flex-col items-center justify-center' key={index}>
            <p className="font-light text-sm">{item.date}</p>
            <img src={Sun} alt="" className='w-12 ml-1' />
            <p className="font-medium">{item.temp}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;

function filterDailyForecast(forecastData) {
  if (!forecastData) return [];

  const filteredData = [];

  // Create a map to track unique dates
  const uniqueDates = new Set();

  // Iterate through forecast data and filter one data point per day
  forecastData.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0]; // Extract date

    // Only include one data point per unique date
    if (!uniqueDates.has(date)) {
      uniqueDates.add(date);
      filteredData.push({
        date,
        temp: item.main.temp,
      });
    }
  });

  return filteredData;
}
