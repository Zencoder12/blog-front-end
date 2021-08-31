import React, { useState, useEffect } from "react";
import Post from "./Post";
import * as db from "../services/db";
import Loading from "./Loading";

const PostsContainer = () => {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const fetchData = async () => {
    const data = await db.getPosts();
    console.log(data);
    setPosts(data);
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoaded) {
    return (
      <div className="posts__container">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  } else return <Loading />;
};

export default PostsContainer;
