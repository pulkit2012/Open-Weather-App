import React, { useState } from "react";
import { Link } from "react-router-dom";
import LatAndLongFinder from "../Searched-Location/userSearchedLocation";
import validate from "../../Form-Validation/Validate-Dashboard";
import CityContext from "../../MyContext/CityContext";

const Dashboard = () => {
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  let person = JSON.parse(localStorage.getItem("logged-in-user"));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(city)) {
      localStorage.setItem("city", city);
      setSubmitted(true);
    } else {
      localStorage.removeItem("filter");
      setCity("");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setCity(value);
    setSubmitted(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem("logged-in-user");
    localStorage.removeItem("city");
  };

  return (
    <div>
      <article>
        <div className="item">
          <h3>Welcome {person.name}</h3>
          <button onClick={logoutHandler}>
            <Link to="/">Logout</Link>
          </button>
        </div>
        <form className="form">
          <div className="form-control">
            <label htmlFor="query">Query : </label>
            <input
              type="text"
              id="query"
              name="query"
              value={city}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        {localStorage.getItem("city") && submitted ? (
          <CityContext.Provider value={{ city }}>
            <LatAndLongFinder />
          </CityContext.Provider>
        ) : (
          ""
        )}
      </article>
    </div>
  );
};

export default Dashboard;
