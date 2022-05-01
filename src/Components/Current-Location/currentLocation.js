import React, { useState, useEffect } from "react";
import CurrentCity from "../City-Details/cityDetails";
import CoordinatesContext from "../../MyContext/AltitudeContext";

const CurrentLocation = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrive your location");
        }
      );
    }
  }, []);
  return (
    <div className="container">
      <p>{status}</p>
      {latitude && longitude ? (
        <CoordinatesContext.Provider value={{ latitude, longitude }}>
          <div className="item">
            <CurrentCity />
          </div>
        </CoordinatesContext.Provider>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CurrentLocation;
