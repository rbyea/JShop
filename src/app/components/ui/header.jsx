import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark osahan-nav-top p-0 px-2 sticky-top">
      <div className="container">
        <Link className="navbar-brand mr-2" to="/">
          <img
            src="https://askbootstrap.com/preview/jarda/img/logo.svg"
            alt=""
          />
        </Link>
        <Navbar />
      </div>
    </nav>
  );
};

export default Header;
