import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementGame,
  getListBasket,
  getTotalPrice,
  incrementGame,
  removeGame
} from "../../../store/basketSlice";
import { windowScroll } from "../../../utils/windowScroll";
import { discountFunc } from "../../../utils/discountFunc";
import { FaMinusCircle, FaPlusCircle, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

const Basket = (props) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    windowScroll();
  }, []);

  const listBasket = useSelector(getListBasket());
  const totalPrice = useSelector(getTotalPrice());

  const handleIncrementGame = (gameId) => {
    dispatch(incrementGame(gameId));
  };

  const handleDecrementGame = (gameId) => {
    dispatch(decrementGame(gameId));
  };

  const handleRemove = (gameId) => {
    console.log(gameId);
    dispatch(removeGame(gameId));
  };

  return (
    <section className="py-5 basket">
      <div className="container">
        {listBasket.length === 0 ? (
          <div className="basket-container">
            <h2>
              Корзина пустая <span>😕</span>
            </h2>
            <p>
              Вероятней всего, вы не выбрали ещё игру. <br />
              Для того, чтобы купить игру, перейди в каталог товаров.
            </p>
            <Link to="/catalog" className="btn btn-primary">
              Каталог товаров
            </Link>
          </div>
        ) : (
          <>
            <div className="basket-block-list">
              {listBasket.map((game) => (
                <div className="basket-list" key={game.gameId}>
                  <div className="basket-left-side">
                    <Link to={`card/${game.gameId}`} className="basket__image">
                      <img src={game.picture} alt="" />
                    </Link>
                    <div className="basket-content-col">
                      <Link
                        to={`card/${game.gameId}`}
                        className="basket__name mb-2"
                      >
                        {game.title}
                      </Link>
                      <div className="basket__price">
                        <div className="price">
                          <div
                            className={`${
                              Number(game.discount) > 20
                                ? "bg-danger"
                                : "bg-primary"
                            } d-inline-block text-center px-2 py-1 text-white`}
                          >
                            -{game.discount}%
                          </div>
                          <s className="text-white-50 mx-1">
                            {game.price} руб.
                          </s>
                          <span className="text-white">
                            {game.price -
                              discountFunc(game.price, game.discount)}{" "}
                            руб.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basket-right-side__count">
                    <a
                      href="#"
                      onClick={() => handleDecrementGame(game.gameId)}
                      className={`basket-minus ${
                        game.count === 1 ? "disabled" : ""
                      }`}
                    >
                      <FaMinusCircle />
                    </a>
                    <div className="basket-count">{game.count}</div>
                    <a
                      href="#"
                      onClick={() => handleIncrementGame(game.gameId)}
                      className="basket-plus"
                    >
                      <FaPlusCircle />
                    </a>
                  </div>
                  <div className="game-price">
                    {(game.price -
                      discountFunc(game.price, game.discount)) * game.count}
                  </div>

                  <div className="basket-right-side">
                    <a
                      href="#"
                      onClick={() => handleRemove(game.gameId)}
                      className="basket-right-side__delete"
                    >
                      <FaWindowClose />
                    </a>
                  </div>
                </div>
              ))}
            </div>

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
          </>
        )}
      </div>
    </section>
  );
};

export default Basket;
