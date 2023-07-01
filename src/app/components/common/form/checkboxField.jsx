import React from "react";
import PropTypes from "prop-types";

const CheckField = ({ type, value, onChange, title, name }) => {
  const handleChange = (e) => {
    const { checked } = e.target;
    onChange({ name, value: checked });
  };
  return (
    <div className="custom-control custom-checkbox">
      <input
        onChange={handleChange}
        checked={value || false}
        type={type}
        className="custom-control-input"
        id={name}
      />
      <label className="custom-control-label" htmlFor={name}>
        {title}
      </label>
    </div>
  );
};

CheckField.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func
};

export default CheckField;
