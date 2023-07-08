import React from "react";
import { useSelector } from "react-redux";
import { getListGames, getLoadingStatusGames } from "../../../store/gamesSlice";
import GameListCard from "../GameList/GameListCard";
import Button from "../../ui/button";

const CatalogGames = (props) => {
  const listGames = useSelector(getListGames());
  const loadingGames = useSelector(getLoadingStatusGames());

  return (
    <div className="row">
      {!loadingGames
        ? listGames.map((game) => <GameListCard key={game._id} {...game} />)
        : "Загрузка..."}

      <div className="col-lg-12 text-center">
        <Button title="Загрузить еще" name="btn-light btn-lg" />
      </div>
    </div>
  );
};

export default CatalogGames;
