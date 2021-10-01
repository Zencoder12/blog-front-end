import React from "react";
import { imagesApiUrl } from "../config.json";

const Post = ({ post }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomImage() {
    return imagesApiUrl + getRandomInt(20);
  }

  return (
    <div className="post post__frame">
      <div className="post post__image__container">
        <img className="post post__image" src={getRandomImage()} alt="" />
      </div>
      <div className="post post__content">
        <h3 className="post post__title">{post.title}</h3>
        <span className="post post__author">-- posted by {post.author} --</span>
      </div>
    </div>
  );
};

export default Post;
