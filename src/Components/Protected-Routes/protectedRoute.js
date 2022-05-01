import React from "react";

import { Outlet } from "react-router-dom";
import Login from "../Login/login";

const ProtectedRoute = ({ isAuth }) => {
  isAuth = localStorage.getItem("logged-in-user") ? true : false;
  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
