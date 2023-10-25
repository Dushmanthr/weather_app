import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdLocationPin } from 'react-icons/md';

const SearchDiv = ({ onSearch }) => {
  const [latitude, setLatitude] = useState(''); // State for latitude input
  const [longitude, setLongitude] = useState(''); // State for longitude input

  const handleSearchClick = () => {
    // Call the onSearch function with latitude and longitude values
    onSearch(latitude, longitude);
  };

  return (
    <div className="flex flex-row justify-center my-3">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Latitude"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          type="text"
          placeholder="Longitude"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <BiSearchAlt2
          size={125}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <MdLocationPin size={125} className="text-white cursor-pointer transition ease-out hover:scale-125" />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-xl text-white font-light">
          °C
        </button>
        <p className="text-xl text-white mx-1"> | </p>
        <button name="metric" className="text-xl text-white font-light">
          °F
        </button>
      </div>
    </div>
  );
};

export default SearchDiv;
