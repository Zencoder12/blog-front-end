import React from "react";
import { axiosInstance } from "../services/db";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Logout = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      axiosInstance.post("user/logout/blacklist/", {
        refresh_token: localStorage.getItem("refresh_token"),
      });
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      axiosInstance.defaults.headers["Authorization"] = null;
      history.push("/login");
    } catch (error) {
      if (error.response.status === 400)
        alert("Something went wrong. Please try logout again.");
    }
  };

  return (
    <NavLink to="/home" onClick={handleLogout}>
      <FontAwesomeIcon className="logout-icon" icon={faDoorOpen} size="4x" />
    </NavLink>
  );
};

export default Logout;
