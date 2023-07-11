import React from "react";
import Price from "../../ui/price";
import PropTypes from "prop-types";

const GameFavorite = ({ picture, price, discount, data, title }) => {
  return (
    <div className="osahan-card">
      <a href="store-single.html">
        <img className="img-fluid" src={picture} alt />
        <div className="d-flex">
          <div className="bg-success col text-center p-1 text-white text-uppercase small">
            <i className="feather-heart mr-1"></i> Favorite
          </div>
          <div className="bg-danger col text-center p-1 text-white text-uppercase small">
            <i className="feather-trash mr-1"></i> Remove
          </div>
        </div>
        <div className="osahan-card-body mt-3">
          <h6 className="text-white mb-1">{title}</h6>
          <p className="mb-0 text-white-50">{data}</p>
          <div className="price mt-3">
            <Price price={price} discount={discount} />
          </div>
        </div>
      </a>
    </div>
  );
};

GameFavorite.propTypes = {
  picture: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default GameFavorite;
