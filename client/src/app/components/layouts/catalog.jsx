import React from "react";
import { windowScroll } from "../../utils/windowScroll";
import { useSelector } from "react-redux";
import { getListCategories } from "../../store/categoriesSlice";
import { getListFeatures } from "../../store/featuresSlice";
import SortCatalog from "../common/CatalogBlock/SortCatalog";
import SearchCatalog from "../ui/Form/SearchCatalog";
import AccordionCatalog from "../common/CatalogBlock/AccordionCatalog";
import CatalogGames from "../common/CatalogBlock/CatalogGames";

const Catalog = (props) => {
  React.useEffect(() => {
    windowScroll();
  }, []);
  const [sortOrder, setSortOrder] = React.useState("asc"); // По умолчанию сортируем по возрастанию цены

  const handleSortChange = (selectedValue) => {
    setSortOrder(selectedValue);
  };

  const categoriesList = useSelector(getListCategories());
  const featuresList = useSelector(getListFeatures());
  const [data, setData] = React.useState({ search: "" });
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selectedFeatures, setSelectedFeatures] = React.useState([]);

  const handleChange = (target) => {
    if (target.type === "checkbox") {
      if (target.name === "category") {
        setSelectedCategories((prevCategories) => {
          const updatedCategories = { ...prevCategories };
          if (!target.checked) {
            delete updatedCategories[target.value];
          } else {
            updatedCategories[target.value] = true;
          }
          return updatedCategories;
        });
      } else if (target.name === "feature") {
        setSelectedFeatures((prevFeatures) => {
          const updatedFeatures = { ...prevFeatures };
          if (!target.checked) {
            delete updatedFeatures[target.value];
          } else {
            updatedFeatures[target.value] = true;
          }
          return updatedFeatures;
        });
      }
    } else {
      setData((prevState) => ({
        ...prevState,
        [target.name]: target.value.toLowerCase()
      }));
    }
  };

  return (
    <section className="py-5 store-page">
      <div className="container">
        <SortCatalog onSortChange={handleSortChange} />
        <div className="row">
          <div className="col-lg-3">
            <div className="filters rounded mb-4">
              <SearchCatalog
                onChange={handleChange}
                name="search"
                value={data.search}
                type="text"
              />
              <div className="filters-body">
                <div id="accordion">
                  <AccordionCatalog
                    title="Категории"
                    data={categoriesList}
                    selectedItems={selectedCategories}
                    setSelectedItems={setSelectedCategories}
                  />
                  <AccordionCatalog
                    title="Особенности"
                    data={featuresList}
                    selectedItems={selectedFeatures}
                    setSelectedItems={setSelectedFeatures}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <CatalogGames
              sortOrder={sortOrder}
              data={data.search}
              selectedCategories={selectedCategories}
              selectedFeatures={selectedFeatures}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
