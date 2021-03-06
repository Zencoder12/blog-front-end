import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="errors errors__container">
      <h2>404</h2>
      <h3>NOT FOUND</h3>
      <p>The content the you are looking for does not exist on this server.</p>
      <NavLink className="errors not-found__btn" to="/home">
        BACK TO HOMEPAGE
      </NavLink>
    </div>
  );
};

export default NotFound;
