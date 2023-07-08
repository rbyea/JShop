import React from "react";
import styles from "./BasketBlock.module.scss";
import { Link } from "react-router-dom";

const BasketEmpty = (props) => {
  return (
    <div className={styles.basketContainer}>
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p className={styles.center}>
        Вероятней всего, вы не выбрали ещё игру. <br />
        Для того, чтобы купить игру, перейди в каталог товаров.
      </p>
      <Link to="/catalog" className="btn btn-primary">
        Каталог товаров
      </Link>
    </div>
  );
};

export default BasketEmpty;
