import React, { useState } from "react";
import Joi from "joi-browser";
import FormGroup from "../subcomponents/form/FormGroup";

const RegistrationForm = () => {
  const [state, setState] = useState({
    data: { email: "", username: "", password: "" },
    errors: {},
  });

  const handleChange = ({ currentTarget: input }) => {
    const errors = { ...state.errors };

    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...state.data };
    data[input.name] = input.value;
    setState({ data, errors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...state.data };
    const errors = validate();
    setState({ data, errors: errors || {} });
    if (errors) return;

    doSubmit();
  };

  const doSubmit = () => {
    console.log("submited");
  };

  const stateSchema = {
    email: Joi.string().email().min(5).max(32).required().label("Email"),
    username: Joi.string().min(5).max(32).required().label("Username"),
    password: Joi.string().min(5).max(32).required().label("Password"),
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
    <div className="container">
      <form className="form form__box">
        <header className="form form__header">
          <h2>Register</h2>
          <h3>Want to register, fill up this form!</h3>
        </header>
        {renderFormGroup("username", "Username", "Type your mailbox")}
        {renderFormGroup("email", "Email Address", "Your full name", "email")}
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
