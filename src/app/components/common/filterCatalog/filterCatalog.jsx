import React from "react";
import { useSelector } from "react-redux";
import { getListCategories } from "../../../store/categoriesSlice";
import { getListFeatures } from "../../../store/featuresSlice";
import AccordionCatalog from "../../ui/accordionCatalog";
import SearchCatalog from "../form/searchCatalog";

const FilterCatalog = () => {
  const categoriesList = useSelector(getListCategories());
  const featuresList = useSelector(getListFeatures());

  return (
    <div className="filters rounded mb-4">
      <SearchCatalog />
      <div className="filters-body">
        <div id="accordion">
          <AccordionCatalog title="Категории" data={categoriesList} />
          <AccordionCatalog title="Особенности" data={featuresList} />
        </div>
      </div>
    </div>
  );
};

export default FilterCatalog;
