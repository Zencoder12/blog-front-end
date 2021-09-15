import React from "react";
import Logout from "./Logout";

const Header = () => {
  return (
    <div className="header__container">
      <span className="header__name">Gallery</span>
      <span className="header__blog">Blog</span>
      <Logout />
    </div>
  );
};

export default Header;
