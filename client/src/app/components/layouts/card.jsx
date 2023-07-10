import React from "react";
import GamePageArticle from "../common/GamePage/GamePageArticle";
import GamePageItem from "../common/GamePage/GamePageItem";
import { windowScroll } from "../../utils/windowScroll";

const Card = () => {
  React.useEffect(() => {
    windowScroll();
  }, []);
  return (
    <>
      <section className="py-5 store-single-page">
        <div className="container">
          <div className="row">
            <GamePageArticle />

            <GamePageItem />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
