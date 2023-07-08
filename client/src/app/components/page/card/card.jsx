import React from "react";
import GamePageArticle from "../../common/gamePage/gamePageArticle";
import GamePageItem from "../../common/gamePage/gamePageItem";
import { windowScroll } from "../../../utils/windowScroll";

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
