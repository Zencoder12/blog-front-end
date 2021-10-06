import React from "react";

const FormGroup = ({
  name,
  error,
  label,
  value,
  onChange,
  placeholder,
  type,
  isPostForm,
}) => {
  return (
    <div className="form form__group">
      <label className="form form__label" htmlFor={name}>
        {label}
      </label>
      <input
        className={
          isPostForm ? "form form__input post-form" : "form form__input"
        }
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div className="form form__error">{error}</div>}
    </div>
  );
};

export default FormGroup;
