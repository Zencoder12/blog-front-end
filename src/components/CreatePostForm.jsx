import React, { useState } from "react";
import { useHistory } from "react-router";
import Joi from "joi-browser";
import FormGroup from "../subcomponents/form/FormGroup";
import TextArea from "../subcomponents/form/TextArea";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import slugify from "../services/slugify";
import { axiosInstance } from "../services/db";
import * as userServices from "../services/userServices";

const CreatePostForm = () => {
  const isPostForm = true;
  const [state, setState] = useState({
    data: { title: "", excerpt: "", content: "" },
    errors: {},
  });

  const history = useHistory();

  const handleChange = ({ currentTarget: input }) => {
    const errors = { ...state.errors };

    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...state.data };
    data[input.name] = input.value;
    setState({ data, errors });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...state.data };
    const errors = validate();
    setState({ data, errors: errors || {} });
    if (errors) return;

    try {
      const author = userServices.getUserId();
      const slug = slugify(data.title);

      await axiosInstance.post("blog/admin/create/", {
        title: data.title,
        slug: slug,
        author: author,
        excerpt: data.excerpt,
        content: data.content,
      });

      history.push("/home");
    } catch (error) {
      if (error.response.status === 400) {
        const responseErrors = error.response.data;
        const errors = { ...state.errors };

        for (let [field, errorDescription] of Object.entries(responseErrors)) {
          errors[field] = errorDescription;
        }

        setState({ data, errors });
      }
    }
  };

  const stateSchema = {
    title: Joi.string().min(5).max(56).required().label("Title"),
    excerpt: Joi.string().min(5).max(250).required().label("Excerpt"),
    content: Joi.string().min(10).max(1024).required().label("Content"),
  };

  const validate = () => {
    const { error } = Joi.validate(state.data, stateSchema, {
      abortEarly: false,
    });

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: stateSchema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;

    return error ? error.details[0].message : null;
  };

  const renderFormGroup = (name, label, placeholder, type = "text") => {
    return (
      <FormGroup
        error={errors[name]}
        label={label}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        value={data[name]}
        isPostForm={isPostForm}
      />
    );
  };

  const renderTextArea = (
    name,
    label,
    placeholder,
    type = "text",
    rows = 5
  ) => {
    return (
      <TextArea
        error={errors[name]}
        label={label}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        value={data[name]}
        isPostForm={isPostForm}
        rows={rows}
      />
    );
  };

  const renderSubmitButton = () => {
    if (Object.keys(errors).length === 0 && !isAnyInputEmpty()) {
      return (
        <button className="form form__btn" onClick={handleSubmit}>
          Create Post
        </button>
      );
    } else
      return (
        <button
          className="form form__btn disabled"
          disabled={true}
          onClick={handleSubmit}
        >
          Create Post
        </button>
      );
  };

  function isAnyInputEmpty() {
    let result = false;

    for (let property of Object.values(data)) {
      if (property.length === 0) {
        result = true;
        return result;
      }
    }

    return result;
  }

  const { data, errors } = state;

  return (
    <div className="container post-form">
      <form className="form form__box post-form">
        <header className="form form__header">
          <FontAwesomeIcon icon={faFeatherAlt} size="4x" />
          <h2>Create New Post</h2>
        </header>
        {renderFormGroup("title", "Title", "Set the title")}
        {renderTextArea(
          "excerpt",
          "excerpt",
          "Here you can write a summary of your post",
          3
        )}
        {renderTextArea("content", "Content", "Share your experience", 20)}
        {renderSubmitButton()}
      </form>
    </div>
  );
};

export default CreatePostForm;
