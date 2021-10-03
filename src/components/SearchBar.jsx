import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useHistory } from "react-router";

const SearchBar = () => {
  const history = useHistory();
  const [data, setData] = useState({ searchValue: "" });

  const handleChange = ({ currentTarget: input }) => {
    const newData = { ...data };
    newData.searchValue = input.value;
    setData(newData);
  };

  const handleSearch = () => {
    history.push({
      pathname: "/search-results",
      search: "?search=" + data.searchValue,
    });
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        name={"searchValue"}
        onChange={handleChange}
        placeholder="SEARCH"
        value={data.searchValue}
      />
      <div className="search-bar__icon-container">
        <button className="search-bar__btn" onClick={handleSearch}>
          <FontAwesomeIcon
            className="search-bar__icon"
            icon={faSearch}
            size="2x"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
