import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../services/db";
import { toast } from "react-toastify";
import Menu from "./Menu";

const PostPage = () => {
  const history = useHistory();
  const { slug } = useParams();
  const [data, setData] = useState({ post: [] });

  const handleDelete = () => {
    axiosInstance
      .delete("blog/admin/delete/" + data.post.id)
      .catch((error) => {
        if (error.response.status === 404)
          toast.warning("Operation failed. Please try again later.");
      })
      .then(() => history.push("/home"));
  };

  const handleEdit = () => {
    history.push("/edit/" + data.post.id);
  };

  useEffect(() => {
    try {
      axiosInstance.get("blog/post/" + slug).then((res) => {
        setData({ post: res.data });
      });
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 404) alert("Post not found!");
    }
  }, []);

  // TODO: implement response to error

  return (
    <React.Fragment>
      <Menu toDeletePost={handleDelete} toEditPost={handleEdit} />
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
    </React.Fragment>
  );
};

export default PostPage;
