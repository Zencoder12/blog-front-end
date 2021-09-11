import React, { useState } from "react";
import Joi from "joi-browser";
import FormGroup from "../subcomponents/form/FormGroup";

const Form = () => {
  const [state, setState] = useState({
    account: { email: "", username: "", password: "" },
    errors: {},
  });

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

    console.log("submited");
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

  const renderButton = () => {
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
          <h2>Register</h2>
          <h3>Want to register, fill up this form!</h3>
        </header>
        <FormGroup
          error={errors.username}
          label="Username"
          name="username"
          onChange={handleChange}
          placeholder="Type your mailbox"
          type="text"
          value={account.username}
        />
        <FormGroup
          error={errors.email}
          label="Email Address"
          name="email"
          onChange={handleChange}
          placeholder="Your full name"
          type="email"
          value={account.email}
        />
        <FormGroup
          error={errors.password}
          label="Password"
          name="password"
          onChange={handleChange}
          placeholder="Choose your password"
          type="password"
          value={account.password}
        />
        {renderButton()}
      </form>
    </div>
  );
};

export default Form;
