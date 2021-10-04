import React, { useState } from "react";
import Joi from "joi-browser";
import { axiosInstance } from "../services/db";
import FormGroup from "../subcomponents/form/FormGroup";
import { NavLink, useHistory } from "react-router-dom";
import * as userServices from "../services/userServices";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [state, setState] = useState({
    account: { email: "", password: "" },
    errors: {},
  });

  const history = useHistory();

  const handleChange = ({ currentTarget: input }) => {
    const errors = { ...state.errors };

    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...state.account };
    account[input.name] = input.value;
    setState({ account, errors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = { ...state.account };
    const errors = validate();
    setState({ account, errors: errors || {} });
    if (errors) return;

    axiosInstance
      .post("token/", {
        email: account.email,
        password: account.password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");

        userServices.setUserId();

        toast("Welcome back!");

        history.push("/home");
      })
      .catch((error) => {
        if (
          error.response.status === 401 &&
          error.response.statusText === "Unauthorized"
        ) {
          let errors = { ...state.errors };

          errors.email =
            "The provided credentials are invalid. Please try again.";

          setState({ account, errors });
        }
      });
  };

  const stateSchema = {
    email: Joi.string().email().min(5).max(32).required().label("Email"),
    password: Joi.string().min(5).max(32).required().label("Password"),
  };

  const validate = () => {
    const { error } = Joi.validate(state.account, stateSchema, {
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
        value={account[name]}
      />
    );
  };

  const renderSubmitButton = () => {
    if (Object.keys(errors).length === 0 && !isAnyInputEmpty()) {
      return (
        <button className="form form__btn" onClick={handleSubmit}>
          Sign In
        </button>
      );
    } else
      return (
        <button
          className="form form__btn disabled"
          disabled={true}
          onClick={handleSubmit}
        >
          Sign In
        </button>
      );
  };

  function isAnyInputEmpty() {
    let result = false;

    for (let property of Object.values(account)) {
      if (property.length === 0) {
        result = true;
        return result;
      }
    }

    return result;
  }

  const { account, errors } = state;

  return (
    <div className="container">
      <form className="form form__box">
        <header className="form form__header">
          <h2>Sign In</h2>
          <h3>Please enter the required</h3>
          <h3>information.</h3>
        </header>
        {renderFormGroup(
          "email",
          "Email Address",
          "Type your mailbox",
          "email"
        )}
        {renderFormGroup(
          "password",
          "Password",
          "Choose your password",
          "password"
        )}
        <NavLink className="form form__redirect" to="/register">
          <p className="form form__redirect-msg">Don't have an account yet?</p>
          <p className="form form__redirect-msg">Click here to register.</p>
        </NavLink>
        {renderSubmitButton()}
      </form>
    </div>
  );
};

export default LoginForm;
