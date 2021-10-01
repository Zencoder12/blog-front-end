import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../services/db";

const PostPage = () => {
  const { slug } = useParams();

  const [data, setData] = useState({ post: [] });

  useEffect(() => {
    axiosInstance.get("blog/" + slug).then((res) => {
      setData({ post: res.data });
    });
  }, []);

  return (
    <div className="post-page post-page__container">
      <h2 className="post-page post-page__title">{data.post.title}</h2>
      <div className="post-page post-page__content-container">
        <div className="post-page post-page__text-container">
          <p className="post-page post-page__content">{data.post.content}</p>
          <h3 className="post-page post-page__author">
            -- {data.post.author} --
          </h3>
        </div>
        <div className="post-page post-page__image-container">
          <img
            src="https://source.unsplash.com/collection/190727/800x600?"
            alt=""
            className="post-page__image"
          />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
