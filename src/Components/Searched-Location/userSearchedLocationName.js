import React from "react";
import CurrentCity from "../City-Details/cityDetails";
import CoordinatesContext from "../../MyContext/AltitudeContext";

const CityName = ({ products }) => {
  return (
    <>
      {products.map((city, index) => {
        const { lat: latitude, lon: longitude, state } = city;
        return (
          <>
            {index === 1 ? (
              <div className="item">
                <h4>Cities May Be Related To Your Search</h4>
              </div>
            ) : (
              ""
            )}
            <CoordinatesContext.Provider value={{ latitude, longitude }}>
              <div className="item">
                <h3>{state}</h3>
                <CurrentCity />
              </div>
            </CoordinatesContext.Provider>
          </>
        );
      })}
    </>
  );
};

export default CityName;
