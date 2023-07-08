import React from "react";
import FilterCatalog from "../../common/filterCatalog/filterCatalog";
import SortCatalog from "../../common/sortCatalog/sortCatalog";
import CatalogGames from "../../common/catalogGames/catalogGames";
import { windowScroll } from "../../../utils/windowScroll";

const Catalog = (props) => {
  React.useEffect(() => {
    windowScroll();
  }, []);
  return (
    <section className="py-5 store-page">
      <div className="container">
        <SortCatalog />
        <div className="row">
          <div className="col-lg-3">
            <FilterCatalog />
          </div>
          <div className="col-lg-9">
            <CatalogGames />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
