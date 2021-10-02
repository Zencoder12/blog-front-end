import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import Post from "./Post";
import * as db from "../services/db";
import Loading from "./Loading";
import { serverApi } from "../config.json";

const SearchResultsPage = () => {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const fetchData = async () => {
    const response = await db.axiosInstance.get(
      serverApi + "blog/search/" + location.search
    );
    setPosts(response.data);
    setLoaded(true);
  };

  //TODO: implement a results not found page

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoaded) {
    return (
      <React.Fragment>
        <div className="posts posts__container">
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
