import React from "react";
import PropTypes from "prop-types";
import { discountFunc } from "../../../utils/discountFunc";

const TopSalesCard = ({ title, discount, data, price, picture, _id: id }) => {
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div className="col-lg-3 col-md-6">
      <div className="osahan-card">
        <a href="#" onClick={() => handleClick(id)}>
          <div className="osahan-card__image">
            <img className="img-fluid" src={picture} alt="" />
          </div>
          <div className="osahan-card-body mt-3">
            <h6 className="text-white mb-1">{title}</h6>
            <p className="mb-0 text-white-50">{data}</p>
            <div className="price mt-3">
              {Number(discount) !== 0 && (
                <>
                  <div className="bg-primary d-inline-block text-center px-2 py-1 text-white">
                    -{discount}%
                  </div>
                  <s className="text-white-50 mx-1">{price} руб.</s>
                </>
              )}

              <span className="text-white">
                {price - discountFunc(price, discount)} руб.
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

TopSalesCard.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  discount: PropTypes.string,
  data: PropTypes.string,
  price: PropTypes.string,
  picture: PropTypes.string
};

export default TopSalesCard;
