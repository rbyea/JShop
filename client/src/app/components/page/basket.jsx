import React from "react";
import { useSelector } from "react-redux";
import { getListBasket } from "../../store/basketSlice";
import { windowScroll } from "../../utils/windowScroll";
import BasketEmpty from "../common/BasketBlock/BasketEmpty";
import BasketList from "../common/BasketBlock/BasketList";
import BasketUnder from "../common/BasketBlock/BasketUnder";

const Basket = (props) => {
  React.useEffect(() => {
    windowScroll();
  }, []);

  const listBasket = useSelector(getListBasket());

  return (
    <section className="py-5 basket">
      <div className="container">
        {listBasket.length === 0 ? (
          <BasketEmpty />
        ) : (
          <>
            <BasketList listBasket={listBasket} />

            <BasketUnder listBasket={listBasket} />
          </>
        )}
      </div>
    </section>
  );
};

export default Basket;
