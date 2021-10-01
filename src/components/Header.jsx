import React from "react";
import Logout from "./Logout";
import SearchBar from "./SearchBar";

const Header = () => {
  const searchBarSize = "large";

  return (
    <div className="header__container">
      <div>
        <span className="header__name">Gallery</span>
        <span className="header__blog">Blog</span>
      </div>
      <SearchBar size={searchBarSize} />
      <Logout />
    </div>
  );
};

export default Header;
