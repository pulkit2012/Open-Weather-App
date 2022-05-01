import React from "react";
import { useFetch } from "../../CustomHook/useFetch";
import { useContext } from "react";
import CoordinatesContext from "../../MyContext/AltitudeContext";

function CurrentCity() {
  const { latitude, longitude } = useContext(CoordinatesContext);
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  const { loading, products } = useFetch(url);
  return (
    <div className="item">
      {loading ? (
        <p>Fetching Details..</p>
      ) : (
        <div>
          <h3>{products.name}</h3>
          <p>Sky: {products.weather[0].description}</p>
          <p>Temp: {products.main.temp} C</p>
          <p>It's Like: {products.main.feels_like} C</p>
          <p>Humidity: {products.main.humidity} %</p>
        </div>
      )}
    </div>
  );
}

export default CurrentCity;
