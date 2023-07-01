import React from "react";
import PropTypes from "prop-types";

const GamePageArticle = ({ picture }) => {
  return (
    <div className="col-lg-3">
      <div className="position-sticky">
        <div className=" mb-1">
          <img className="img-fluid" src={picture} alt="" />
        </div>
        <h3 className="mt-4 mb-3">Fortnite Season 3</h3>
        <p className="font-weight-normal mb-4 text-white-50">
          Explore some of the biggest and best games from this years show!
        </p>
        <div className="d-flex mb-4">
          <div className="btn btn-danger col-8">
            <i className="feather-heart mr-1"></i> Избранное
          </div>
          <div className="btn btn-warning col-4 px-2">
            <i className="feather-download-cloud mr-1"></i> Купить
          </div>
        </div>
        <div className="bg-dark p-3 sidebar-widget mb-4">
          <div className="nav nav-pills flex-column lavalamp">
            <a className="nav-link" href="#about">
              <i className="feather-home mr-1"></i> Об игре
            </a>
            <a className="nav-link" href="#video">
              <i className="feather-video mr-1"></i>Видео
            </a>
            <a className="nav-link" href="#offers">
              <i className="feather-award mr-1"></i> Похожие игры
            </a>
            <a className="nav-link" href="#specifications">
              <i className="feather-edit mr-1"></i> Характеристики
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

GamePageArticle.propTypes = {
  picture: PropTypes.string
};

export default GamePageArticle;
