import { useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";

const ArrowMenuIcon = ({ onClick, isActive }) => {
  return (
    <div className="menu-icon">
      <button
        className={
          isActive
            ? "menu-icon menu-icon__container active"
            : "menu-icon menu-icon__container"
        }
        onClick={onClick}
      >
        <ArrowIcon className="menu-icon menu-icon__icon" />
      </button>
    </div>
  );
};

export default ArrowMenuIcon;
