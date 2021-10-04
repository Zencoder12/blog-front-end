import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { axiosInstance } from "../services/db";
import * as userServices from "../services/userServices";

const Logout = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      axiosInstance.post("user/logout/blacklist/", {
        refresh_token: localStorage.getItem("refresh_token"),
      });
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      userServices.removeUserId();
      axiosInstance.defaults.headers["Authorization"] = null;

      toast.info("You've logged out.");

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
