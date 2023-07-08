import React from "react";
import { Link } from "react-router-dom";
import User from "../../assets/p13.png";

const NavProfile = (props) => {
  return (
    <li className="nav-item dropdown no-arrow ml-1 osahan-profile-dropdown">
      <div className="nav-link dropdown-toggle pr-0" role="button">
        <img className="img-profile rounded-circle" src={User} />
      </div>

      <div className="dropdown-menu dropdown-menu-right shadow-sm">
        <div className="p-3 d-flex align-items-center">
          <div className="dropdown-list-image mr-3">
            <img className="rounded-circle" src={User} alt="" />
            <div className="status-indicator bg-success"></div>
          </div>
          <div className="font-weight-bold">
            <div className="text-truncate">Gurdeep Osahan</div>
            <div className="small text-gray-500">UI/UX Designer</div>
          </div>
        </div>
        <div className="dropdown-divider"></div>

        <Link className="dropdown-item" to="/account">
          <i className="feather-edit mr-1"></i> My Account
        </Link>

        <Link className="dropdown-item" to="/favorite">
          <i className="feather-heart mr-1"></i> Favorite
        </Link>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item" to="/login/register">
          <i className="feather-log-out mr-1"></i> Регистрация
        </Link>
      </div>
    </li>
  );
};

export default NavProfile;
