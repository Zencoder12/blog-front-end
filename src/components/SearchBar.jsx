import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const SearchBar = ({ size }) => {
  if (size === "large") {
    return (
      <div className="search-bar search-bar__container search-bar--large">
        <input className="search-bar search-bar__input" placeholder="SEARCH" />
        <NavLink to="/about">
          <FontAwesomeIcon icon={faSearch} size="3x" />
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className="search-bar search-bar__container">
        <input className="search-bar search-bar__input" placeholder="SEARCH" />
        <NavLink to="/about">
          <FontAwesomeIcon icon={faSearch} size="3x" />
        </NavLink>
      </div>
    );
  }
};

export default SearchBar;
