import React from "react";
import { useSelector } from "react-redux";
import { getListGamesLength } from "../../../store/gamesSlice";

const SortCatalog = (props) => {
  const gamesLength = useSelector(getListGamesLength());

  return (
    <div className="d-flex align-item-center title mb-3">
      <h5 className="m-0 font-weight-normal">
        Всего товаров - <span className="text-white-50">{gamesLength}</span>
      </h5>
      <div className="ml-auto d-flex align-items-center">
        Сортировка по:
        <div className="dropdown ml-2">
          <button
            className="btn btn-sm btn-outline-light dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Release Date
          </button>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenu2"
          >
            <button className="dropdown-item" type="button">
              Relevance
            </button>
            <button className="dropdown-item" type="button">
              Alphabetical
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortCatalog;
