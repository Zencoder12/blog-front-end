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
    <div className="post__frame">
      <div className="post__image__container">
        <img className="post__image" src={getRandomImage()} alt="" />
      </div>
      <div className="post__content">
        <h3 className="post__title">{post.title}</h3>
        <span className="post__author">{post.author}</span>
      </div>
    </div>
  );
};

export default Post;
