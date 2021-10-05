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

  // processdate() convert date format yyyy/mm/dd -> dd/mm/yyyy
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
        <h4 className="post post__excerpt">{post.excerpt}</h4>
        <span className="post post__time">Post date: {publishedDate}</span>
      </div>
    </div>
  );
};

export default Post;
