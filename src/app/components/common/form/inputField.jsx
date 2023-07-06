import React from "react";
import PropTypes from "prop-types";

const InputField = ({ type, title, value, onChange, name }) => {
  const handleChange = (value) => {
    onChange({ name, value: value });
  };
  return (
    <div className="form-group">
      {title && <label htmlFor={name}>{title}</label>}
      <input
        type={type}
        onChange={e => handleChange(e.target.value)}
        className="form-control"
        id={name}
        value={value}
        name={name}
        placeholder="Example input"
      />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string
};

export default InputField;
