import React from "react";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import CheckField from "../../ui/Form/CheckboxField";
import { useDispatch } from "react-redux";
import { loadCategories } from "../../../store/gamesSlice";

const AccordionCatalog = ({ title, data }) => {
  const dispatch = useDispatch();
  const [activeAccordion, setActiveAccordion] = React.useState(false);
  const [visibleList, setVisibleList] = React.useState(false);

  const handleClickAccordion = (e) => {
    e.preventDefault();

    setActiveAccordion(!activeAccordion);
  };

  const handleClickBtn = (e) => {
    e.preventDefault();

    setVisibleList(!visibleList);
  };

  const [entities, setEntities] = React.useState({});

  const handleChange = (target) => {
    setEntities((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));

    console.log(entities);
  };

  React.useEffect(() => {
    dispatch(
      loadCategories({
        categories: entities
      })
    );
  }, [entities]);

  return (
    <>
      <div className="filters-card border-bottom py-4">
        <div className="filters-card-header" id="headingOne">
          <h6 className="mb-0">
            <a href="#" className="btn-link" onClick={handleClickAccordion}>
              {title}
              <i
                className={`float-right ${
                  activeAccordion ? "" : "active-arrow"
                }`}
              >
                <FaArrowRight />
              </i>
            </a>
          </h6>
        </div>

        <div className={`${activeAccordion ? "" : "show"} collapse`}>
          <div className="filters-card-body card-shop-filters">
            {data &&
              data.map((category, index) => (
                <div
                  key={category._id}
                  className={`filters-card__item ${
                    index > 3 && !visibleList ? "hidden" : ""
                  }`}
                >
                  <CheckField
                    type="checkbox"
                    value={entities && entities[category._id]}
                    onChange={handleChange}
                    name={category._id}
                  >
                    {category.name}
                  </CheckField>
                </div>
              ))}

            <div className="mt-2">
              <a href="#" onClick={handleClickBtn} className="link">
                {visibleList ? "Скрыть" : "Смотреть все"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AccordionCatalog.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
};

export default AccordionCatalog;
