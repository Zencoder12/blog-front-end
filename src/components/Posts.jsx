import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Post from "./Post";
import * as db from "../services/db";
import Loading from "./Loading";
import { serverApi } from "../config.json";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

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
    );
  } else return <Loading />;
};

export default Posts;
