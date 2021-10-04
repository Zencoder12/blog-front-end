import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="header__container">
      <NavLink to="/home">
        <div className="header__title">
          <span className="header__name">Gallery</span>
          <span className="header__blog">Blog</span>
        </div>
      </NavLink>
      <SearchBar />
      <Login />
      <Logout />
    </div>
  );
};

export default Header;
