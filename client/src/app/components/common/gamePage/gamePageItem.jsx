import React from "react";
import CardSlider from "../Sliders/CardSlider";
import GamePageAbout from "./GamePageAbout";
import GamePageSpecification from "./GamePageSpecification";
import { useSelector } from "react-redux";
import GameListCard from "../GameList/GameListCard";
import { Link, useParams } from "react-router-dom";
import { getCurrentUserId } from "../../../store/usersSlice";
import { getFavoriteCard } from "../../../store/favoriteSlice";

const GamePageItem = () => {
  const { gameId } = useParams();
  const currentUserId = useSelector(getCurrentUserId());
  const favoriteCard = useSelector(getFavoriteCard(gameId));
  return (
    <div className="col-lg-9">
      <div className="row">
        <div className="col-lg-12">
          <CardSlider />
          <GamePageAbout />
          <div className="section-card pt-4" id="video">
            <h5 className="mb-3 mt-4">Видео</h5>
            <div className="bg-dark">
              <iframe
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                width="100%"
                height="443"
                type="text/html"
                src="https://www.youtube.com/embed/9FCRaSwU3W8?autoplay=0&amp;fs=0&amp;iv_load_policy=3&amp;showinfo=0&amp;rel=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;origin=https://youtubeembedcode.com"
              ></iframe>
            </div>
          </div>
          <GamePageSpecification />

          <div className="section-card pt-4" id="offers">
            <div className="d-flex align-item-center title mb-3 mt-4">
              <h5 className="m-0">Избранные игры</h5>
              <Link
                to={`/account/${currentUserId}/favorite`}
                className="btn btn-sm btn-outline-light ml-auto"
              >
                Смотреть все
              </Link>
            </div>
            <div className="row">
              {favoriteCard.length > 0 ? (
                favoriteCard.map((game) => (
                  <GameListCard
                    key={game._id}
                    title={game.title}
                    discount={game.discount}
                    price={game.price}
                    picture={game.picture}
                    _id={game.gameId}
                  />
                ))
              ) : (
                <div className="col-md-6">Пусто</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePageItem;
