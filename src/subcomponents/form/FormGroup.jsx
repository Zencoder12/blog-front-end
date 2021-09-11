import React from "react";

const FormGroup = ({
  name,
  error,
  label,
  value,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <div className="form form__group">
      <label className="form form__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form form__input"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default FormGroup;
