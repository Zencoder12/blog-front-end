import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { axiosInstance } from "../services/db";
import Post from "./Post";
import Menu from "./Menu";
import Loading from "./Loading";

const Posts = () => {
  const isMainPage = true;
  const [posts, setPosts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const fetchData = async () => {
    const response = await axiosInstance.get("blog/");
    setPosts(response.data);
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoaded) {
    return (
      <React.Fragment>
        <Menu isMainPage={isMainPage} />
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

export default Posts;
