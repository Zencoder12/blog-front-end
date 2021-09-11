import React, { useState } from "react";
import FormGroup from "../subcomponents/form/FormGroup";

const Form = () => {
  const [state, setState] = useState({ email: "", username: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="container">
      <form className="form form__box">
        <header className="form form__header">
          <h2>Register</h2>
          <h3>Want to register, fill up this form!</h3>
        </header>
        <FormGroup
          label="Username"
          name="username"
          onChange={handleChange}
          placeholder="Type your mailbox"
          type="text"
          value={state.userName}
        />
        <FormGroup
          label="Email Address"
          name="email"
          onChange={handleChange}
          placeholder="Your full name"
          type="email"
          value={state.email}
        />
        <FormGroup
          label="Password"
          name="password"
          onChange={handleChange}
          placeholder="Choose your password"
          type="password"
          value={state.password}
        />
        <button className="form form__btn">Sign In</button>
      </form>
    </div>
  );
};

export default Form;
