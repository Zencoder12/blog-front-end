import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="header__container">
      <NavLink to="/home">
        <div>
          <span className="header__name">Gallery</span>
          <span className="header__blog">Blog</span>
        </div>
      </NavLink>
      <SearchBar />
      <Logout />
    </div>
  );
};

export default Header;
