import React from 'react';

const TimeNLocation = ({ weatherData }) => {
  // Check if weatherData exists before using it
  if (!weatherData) {
    return null; // Render nothing if weather data is not available yet
  }

  // Extract the date, time, and location from weatherData or set default values
  const { dt, name, timezone } = weatherData;
  const date = new Date(dt * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const time = new Date(dt * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {date} | Local Time {time}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{name}</p>
      </div>
    </div>
  );
};

export default TimeNLocation;
