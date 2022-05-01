import React from "react";
import { useFetch } from "../../CustomHook/useFetch";
import CityName from "./userSearchedLocationName";
import CityContext from "../../MyContext/CityContext";
import { useContext } from "react";

const LatAndLongFinder = () => {
  const { city } = useContext(CityContext);
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_API_KEY}&limit=10`;
  const { loading, products } = useFetch(url);
  return (
    <>
      {loading ? (
        <div className="item">
          <p>Fetching Your Latitude and Longitude</p>
        </div>
      ) : products.length === 0 ? (
        <div className="item">
          <p>Nothing To Show, Change Params</p>
        </div>
      ) : (
        <CityName products={products} />
      )}
    </>
  );
};

export default LatAndLongFinder;
