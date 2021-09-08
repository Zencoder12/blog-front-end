import React from "react";

const Form = () => {
  return (
    <div className="container">
      <form className="form form__box">
        <header className="form form__header">
          <h2>Register</h2>
          <h3>Want to register fill up this form!</h3>
        </header>
        <div className="form form__group">
          <label className="form form__label">Email Address</label>
          <input
            className="form form__input"
            type="text"
            name="name"
            placeholder="Your full name"
          />
        </div>
        <div className="form form__group">
          <label className="form form__label">Username</label>
          <input
            className="form form__input"
            type="text"
            name="name"
            placeholder="Type your mailbox"
          />
        </div>
        <div className="form form__group">
          <label className="form form__label">Password</label>
          <input
            className="form form__input"
            type="text"
            name="name"
            placeholder="Choose your password"
          />
        </div>
        <button className="form form__btn">Sign In</button>
      </form>
    </div>
  );
};

export default Form;
