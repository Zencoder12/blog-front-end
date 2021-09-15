import React from "react";
import { axiosInstance } from "../services/db";

const Logout = () => {
  const handleLogout = async () => {
    const response = await axiosInstance.post("user/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
    console.log(response);
  };

  return (
    <button className="btn-logout" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
