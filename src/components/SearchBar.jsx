import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";

const SearchBar = () => {
  let history = useHistory();
  const [data, setData] = useState({ searchValue: "" });

  const handleChange = ({ currentTarget: input }) => {
    const newData = { ...data };
    newData.searchValue = input.value;
    setData(newData);
  };

  const submitSearch = () => {
    localStorage.setItem("searchQuery", data.search);
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        name={"searchValue"}
        onChange={handleChange}
        onClick={submitSearch}
        placeholder="SEARCH"
        value={data.search}
      />
      <div className="search-bar__icon-container">
        <NavLink to="/search-results">
          <FontAwesomeIcon
            className="search-bar__icon"
            icon={faSearch}
            size="2x"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default SearchBar;
