import React from "react";
import { useSelector } from "react-redux";
import { getTopSalesGames } from "../../../store/gamesSlice";
import TopSalesCard from "./TopSalesCard";

const TopSales = (props) => {
  const topSalesGames = useSelector(getTopSalesGames());

  if (topSalesGames.length === 0) return "";
  return (
    <section className="pb-5">
      <div className="container">
        <div className="d-flex align-item-center title mb-3">
          <h5 className="m-0 font-weight-normal">Лидеры продаж</h5>
          <a href="store.html" className="btn btn-sm btn-outline-light ml-auto">
            Смотреть все
          </a>
        </div>
        <div className="row">
          {topSalesGames.map((game) => (
            <TopSalesCard key={game._id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSales;
