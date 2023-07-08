import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ value, onChange, children, name }) => {
  const handleChange = (e) => {
    onChange({ name: name, value: !value });
  };
  return (
    <div className="custom-control custom-checkbox">
      <input
        onChange={handleChange}
        checked={value}
        type="checkbox"
        className="custom-control-input"
        id={name}
        value=""
      />
      <label className="custom-control-label" htmlFor={name}>
        {children}
      </label>
    </div>
  );
};

CheckBoxField.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default CheckBoxField;
