import React, { useState } from "react";
import { useHistory } from "react-router";
import Joi from "joi-browser";
import { axiosInstance } from "../services/db";
import FormGroup from "../subcomponents/form/FormGroup";

const RegistrationForm = () => {
  const [state, setState] = useState({
    account: { email: "", username: "", password: "" },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const account = { ...state.account };
    const errors = validate();
    setState({ account, errors: errors || {} });
    if (errors) return;

    try {
      await axiosInstance.post("user/register/", {
        email: account.email,
        username: account.username,
        password: account.password,
      });

      history.push("/login");
      alert("Registration succesfull. Please log in to start using the app.");
    } catch (error) {
      if (error.response.status === 400) {
        const responseErrors = error.response.data;
        const errors = { ...state.errors };

        for (let [field, errorDescription] of Object.entries(responseErrors)) {
          errors[field] = errorDescription;
        }

        setState({ account, errors });
      }
    }
  };

  const stateSchema = {
    email: Joi.string().email().min(5).max(32).required().label("Email"),
    username: Joi.string().min(5).max(32).required().label("Username"),
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
          Register
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
          <h2>Register</h2>
          <h3>Want to register, fill up this form!</h3>
        </header>
        {renderFormGroup("username", "Username", "Your full name")}
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
        {renderSubmitButton()}
      </form>
    </div>
  );
};

export default RegistrationForm;
