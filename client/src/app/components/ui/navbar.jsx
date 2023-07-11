import React from "react";
import { Link } from "react-router-dom";
import NavProfile from "./NavProfile";
import { FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import {
  getLengthBasket,
  // getListBasket,
  // getTotalPrice,
  loadListBasket
} from "../../store/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/usersSlice";
import localStorageService from "../../services/localStorage.service";
import { loadFavoriteList } from "../../store/favoriteSlice";

const Navbar = () => {
  // const listBasket = useSelector(getListBasket());
  const basketLength = useSelector(getLengthBasket());
  // const basketTotalPrice = useSelector(getTotalPrice());
  const isLoggetIn = useSelector(getIsLoggedIn());
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isLoggetIn) {
      dispatch(loadListBasket(localStorageService.getLocalIdKey()));
      dispatch(loadFavoriteList(localStorageService.getLocalIdKey()));
    }
  }, [isLoggetIn]);

  return (
    <>
      <ul className="navbar-nav ml-auto d-flex align-items-center">
        <li className="nav-item dropdown mr-2">
          <Link className="nav-link pr-0" to="/catalog">
            Каталог
          </Link>
        </li>
        <li className="nav-item dropdown mr-2">
          <Link className="nav-link pr-0" to="/news">
            Новости
          </Link>
        </li>
        {isLoggetIn && (
          <>
            <li className="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
              <Link className="nav-link dropdown-toggle" to="/favorite">
                <FaRegHeart />

                <span className="badge badge-danger badge-counter">8</span>
              </Link>
            </li>
            <li className="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
              <Link className="nav-link dropdown-toggle" to="/basket">
                <FaShoppingBasket />

                {basketLength > 0 && (
                  <span className="badge badge-info badge-counter">
                    {basketLength}
                  </span>
                )}
              </Link>
            </li>
          </>
        )}

        {!isLoggetIn && (
          <li className="nav-item dropdown mr-2">
            <Link className="nav-link pr-0" to="/login">
              Вход
            </Link>
          </li>
        )}
        {isLoggetIn && <NavProfile />}
      </ul>
    </>
  );
};

export default Navbar;
