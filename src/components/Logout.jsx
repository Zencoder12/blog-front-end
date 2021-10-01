import React from "react";
import { axiosInstance } from "../services/db";
import { useHistory } from "react-router";

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
    <button className="btn-logout" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
