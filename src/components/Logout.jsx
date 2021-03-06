import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { axiosInstance } from "../services/db";
import * as userServices from "../services/userServices";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      axiosInstance.post("user/logout/blacklist/", {
        refresh_token: sessionStorage.getItem("refresh_token"),
      });
      sessionStorage.removeItem("access_token");
      sessionStorage.removeItem("refresh_token");
      userServices.removeUserId();
      axiosInstance.defaults.headers["Authorization"] = null;

      toast("You've logged out.");

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
