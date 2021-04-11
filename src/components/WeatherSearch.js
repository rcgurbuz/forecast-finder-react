import React, { useContext } from "react";

import Context from "../Context";

const WeatherSearch = () => {
  const { fetchData } = useContext(Context);
  return (
    <div className="weather-search">
      <form onSubmit={fetchData} className="weather-search__form">
        <input
          autoComplete="off"
          name="city"
          className="weather-search__input"
          type="text"
        />
        <div className="weather-search__submit">
          <button className="weather-search__button">&rarr;</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
