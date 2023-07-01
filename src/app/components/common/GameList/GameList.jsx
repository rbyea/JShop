import React from "react";
import { useSelector } from "react-redux";
import {
  getLoadingStatusGames,
  getReceiptsGames,
  getTopSalesGames
} from "../../../store/gamesSlice";
import GameListCard from "./GameListCard";
import PropTypes from "prop-types";
import Button from "../../ui/button";

const GameList = ({ title, guid }) => {
  const [data, setData] = React.useState([]);

  const loadingGames = useSelector(getLoadingStatusGames());
  const topSalesGames = useSelector(getTopSalesGames);
  const receiptsGames = useSelector(getReceiptsGames);

  React.useEffect(() => {
    switch (guid) {
      case "leader":
        setData(topSalesGames || []);
        break;
      case "new":
        setData(receiptsGames || []);
        break;
      default:
        break;
    }
  }, []);
  if (loadingGames) return "Загрузка...";

  return (
    <section className="pb-5">
      <div className="container">
        <div className="d-flex align-item-center title mb-3">
          <h5 className="m-0 font-weight-normal">{title}</h5>
          <Button
            title="Смотреть все"
            name="btn-sm btn-outline-light ml-auto"
          />
        </div>
        <div className="row">
          {data.map((game) => (
            <GameListCard key={game._id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

GameList.propTypes = {
  title: PropTypes.string,
  guid: PropTypes.string
};

export default GameList;
