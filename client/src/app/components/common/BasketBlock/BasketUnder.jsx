import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice } from "../../../store/basketSlice";
import PropTypes from "prop-types";

const BasketUnder = ({ listBasket }) => {
  const totalPrice = useSelector(getTotalPrice());

  return (
    <div className="cart__bottom">
      <div className="cart__bottom-details">
        <span>
          Всего игр: <b>{listBasket.length} шт.</b>
        </span>
        <span>
          Сумма заказа: <b>{totalPrice} ₽</b>
        </span>
      </div>
      <div className="cart__bottom-buttons">
        <Link className="btn btn-light btn-lg" to="/catalog">
          <span>Каталог товаров</span>
        </Link>
        <a href="#" className="btn btn-primary btn-lg">
          <span>Оплатить сейчас</span>
        </a>
      </div>
    </div>
  );
};

BasketUnder.propTypes = {
  listBasket: PropTypes.array.isRequired
};

export default BasketUnder;
