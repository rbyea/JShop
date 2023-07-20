import React from "react";
import { useSelector } from "react-redux";
import { getListBasket, getLoadingStatusBasket } from "../../store/basketSlice";
import { windowScroll } from "../../utils/windowScroll";
import BasketEmpty from "../common/BasketBlock/BasketEmpty";
import BasketList from "../common/BasketBlock/BasketList";
import Preloader from "../ui/preloader/preloader";
import BasketUnder from "../common/BasketBlock/BasketUnder";

const Basket = (props) => {
  React.useEffect(() => {
    windowScroll();
  }, []);

  const listBasket = useSelector(getListBasket);
  const loadStatusBasket = useSelector(getLoadingStatusBasket());

  if (loadStatusBasket) return <Preloader />;

  return (
    <section className="py-5 basket">
      <div className="vh-100">
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
      </div>
    </section>
  );
};

export default Basket;
