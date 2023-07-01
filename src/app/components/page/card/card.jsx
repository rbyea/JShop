import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGamePage } from "../../../store/gamesSlice";
import GamePageArticle from "../../common/gamePage/gamePageArticle";
import GamePageItem from "../../common/gamePage/gamePageItem";
import Preloader from "../../ui/preloader/preloader";

const Card = () => {
  const { gameId } = useParams();

  const gamePage = useSelector((state) => getGamePage(state, gameId));

  if (!gamePage) return <Preloader />;
  return (
    <>
      <section className="py-5 store-single-page">
        <div className="container">
          <div className="row">
            <GamePageArticle {...gamePage} />

            <GamePageItem {...gamePage} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
