import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const SearchBar = ({ size }) => {
  if (size === "large") {
    return (
      <div className="search-bar search-bar--large">
        <input
          className="search-bar__input search-bar--large__input"
          placeholder="SEARCH"
        />
        <div className="search-bar--large__icon-container">
          <NavLink to="/about">
            <FontAwesomeIcon
              className="search-bar--large__icon"
              icon={faSearch}
              size="3x"
            />
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <div className="search-bar">
        <input className="search-bar__input" placeholder="SEARCH" />
        <NavLink to="/about">
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </NavLink>
      </div>
    );
  }
};

export default SearchBar;
