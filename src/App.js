import React from "react";
import Login from "./Components/Login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./Components/ErrorPage/error";
import ProtectedRoute from "./Components/Protected-Routes/protectedRoute";
import Dashboard from "./Components/Dashboard/dashboard";
import CurrentLocation from "./Components/Current-Location/currentLocation";

const isAuth = localStorage.getItem("logged-in-user") === null ? false : true;

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login isAuth={isAuth} />} />
          <Route path="/location" element={<CurrentLocation />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
