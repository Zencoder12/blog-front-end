import React from "react";
import Logout from "./Logout";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="header__container">
      <div>
        <span className="header__name">Gallery</span>
        <span className="header__blog">Blog</span>
      </div>
      <SearchBar />
      <Logout />
    </div>
  );
};

export default Header;
