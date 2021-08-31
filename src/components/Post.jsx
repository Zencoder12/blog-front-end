import React from "react";
import { imagesApiUrl } from "../config.json";

const Post = () => {
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
        <h3 className="post__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          expedita.
        </h3>
        <span className="post__author">Author</span>
      </div>
    </div>
  );
};

export default Post;
