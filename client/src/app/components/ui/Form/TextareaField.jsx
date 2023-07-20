import React from "react";
import PropTypes from "prop-types";

const TextareaField = ({ error, value, onChange, title, name }) => {
  const handleChange = (value) => {
    onChange({ name, value: value });
  };
  return (
    <div className="form-group">
      <label htmlFor={name}>{title}</label>
      <textarea
        className={error ? "form-control is-invalid" : "form-control is-valid"}
        id={name}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        rows="1"
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextareaField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  title: PropTypes.string
};

export default TextareaField;
