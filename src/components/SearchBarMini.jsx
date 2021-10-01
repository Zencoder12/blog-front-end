import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const SearchBarMini = () => {
  return (
    <div className="search-bar-mini search-bar-mini__container">
      <input
        className="search-bar-mini search-bar-mini__input"
        placeholder="Search"
      />
      <NavLink to="/about">
        <FontAwesomeIcon icon={faSearch} size="3x" />
      </NavLink>
    </div>
  );
};

export default SearchBarMini;
