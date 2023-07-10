import React from "react";
import SortCatalog from "../common/CatalogBlock/SortCatalog";
import CatalogGames from "../common/CatalogBlock/CatalogGames";
import { windowScroll } from "../../utils/windowScroll";
import FilterCatalog from "../common/CatalogBlock/FilterCatalog";

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
