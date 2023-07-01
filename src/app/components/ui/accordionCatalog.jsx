import React from "react";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import CheckField from "../common/form/checkboxField";

const AccordionCatalog = ({ title, data }) => {
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

  const [entities, setEntities] = React.useState();

  const handleChange = (target) => {
    setEntities((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  React.useEffect(() => {
    console.log(entities);
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
                    title={category.name}
                    name={category._id}
                  />
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
