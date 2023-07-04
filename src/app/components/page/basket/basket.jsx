import React from "react";
import { useSelector } from "react-redux";
import { getListBasket } from "../../../store/basketSlice";
import { windowScroll } from "../../../utils/windowScroll";

const Basket = (props) => {
  React.useEffect(() => {
    windowScroll();
  }, []);

  const listBasket = useSelector(getListBasket());

  return (
    <section className="py-5 basket">
      <div className="container">
        {listBasket.length === 0
          ? "Корзина пуста"
          : listBasket.map((game) => (
              <div className="basket-list" key={game.gameId}>
                <div className="basket__image">
                  <img src={game.picture} alt="" />
                </div>
                <div className="basket__name">{game.title}</div>
                <div className="basket__price">{game.price}</div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Basket;
