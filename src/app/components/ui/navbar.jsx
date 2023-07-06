import React from "react";
import { Link } from "react-router-dom";
import NavProfile from "./NavProfile";
import { FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import {
  getLengthBasket,
  getListBasket,
  getTotalPrice
} from "../../store/basketSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const listBasket = useSelector(getListBasket());
  const basketLength = useSelector(getLengthBasket());
  const basketTotalPrice = useSelector(getTotalPrice());

  React.useEffect(() => {
    const jsonGamesCount = JSON.stringify(listBasket);
    const jsonTotalPrice = JSON.stringify(basketTotalPrice);
    localStorage.setItem("basketGames", jsonGamesCount);
    localStorage.setItem("basketTotalPrice", jsonTotalPrice);
  }, [listBasket, basketTotalPrice]);
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

        <NavProfile />
      </ul>
    </>
  );
};

export default Navbar;
