import React from "react";
import PropTypes from "prop-types";

const CheckField = ({ title, name }) => {
  return (
    <div className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id={name} />
      <label className="custom-control-label" htmlFor={name}>
        {title}
      </label>
    </div>
  );
};

CheckField.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string
};

export default CheckField;
