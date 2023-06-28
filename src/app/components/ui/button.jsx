import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, name }) => {
  return (
    <a href="#" className={`btn ${name}`}>
      {title}
    </a>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string
};

export default Button;
