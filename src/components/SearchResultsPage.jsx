import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Post from "./Post";
import * as db from "../services/db";
import Loading from "./Loading";
import { serverApi } from "../config.json";
import SearchBar from "./SearchBar";

const SearchResultsPage = () => {
  const searchBarSize = "small";

  const [posts, setPosts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const search = localStorage.getItem("searchQuery");
  console.log(localStorage.getItem("searchQuery"));

  const fetchData = async () => {
    const response = await db.axiosInstance.get(serverApi + "blog");
    setPosts(response.data);
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoaded) {
    return (
      <React.Fragment>
        <div className="posts posts__container">
          <SearchBar size={searchBarSize} />
          {posts.map((post) => (
            <NavLink
              className="posts posts__link"
              key={post.id}
              to={"post/" + post.slug}
            >
              <Post post={post} />
            </NavLink>
          ))}
        </div>
      </React.Fragment>
    );
  } else return <Loading />;
};

export default SearchResultsPage;
