import React from "react";
import { imagesApiUrl } from "../config.json";

const Post = ({ post }) => {
  const publishedDate = processDate();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomImage() {
    return imagesApiUrl + getRandomInt(20);
  }

  function processDate() {
    const date = post.published;
    const yyyy = date.substring(0, 4);
    const mm = date.substring(5, 7);
    const dd = date.substring(8, 10);

    return `${dd}-${mm}-${yyyy}`;
  }

  return (
    <div className="post post__frame">
      <div className="post post__image__container">
        <img className="post post__image" src={getRandomImage()} alt="" />
      </div>
      <div className="post post__content">
        <h3 className="post post__title">{post.title}</h3>
        <div className="post post__meta">
          <span className="post post__author">- posted by {post.author} -</span>
          <span className="post post__time">{publishedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
