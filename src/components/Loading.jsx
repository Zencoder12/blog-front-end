import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
  return (
    <div className="loading loading__container">
      <FontAwesomeIcon icon={faSpinner} size="4x" />
      <p className=" loading__content">
        Loading Blog Posts... If posts are not loaded, your session might have
        expired. Please login and try again.
      </p>
    </div>
  );
};

export default Loading;
