import React from "react";
import CardSlider from "../Sliders/CardSlider";
import GamePageAbout from "./GamePageAbout";
import GamePageSpecification from "./GamePageSpecification";

const GamePageItem = () => {
  return (
    <div className="col-lg-9">
      <div className="row">
        <div className="col-lg-12">
          <CardSlider />
          <GamePageAbout />
          <div className="section-card pt-4" id="video">
            <h5 className="mb-3 mt-4">Видео</h5>
            <div className="bg-dark">
              <iframe
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                width="100%"
                height="443"
                type="text/html"
                src="https://www.youtube.com/embed/9FCRaSwU3W8?autoplay=0&amp;fs=0&amp;iv_load_policy=3&amp;showinfo=0&amp;rel=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;origin=https://youtubeembedcode.com"
              ></iframe>
            </div>
          </div>
          <div className="section-card pt-4" id="offers">
            <div className="d-flex align-item-center title mb-3 mt-4">
              <h5 className="m-0">Похожие игры</h5>
              <a
                href="coupons.html"
                className="btn btn-sm btn-outline-light ml-auto"
              >
                VIEW MORE
              </a>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="osahan-card">
                  <a href="store-single.html">
                    <img
                      className="img-fluid"
                      src="https://askbootstrap.com/preview/jarda/img/slider/1.jpg"
                      alt=""
                    />
                    <div className="bg-primary text-center p-1 text-white">
                      COUPON CODE - 2020COUPON
                    </div>
                    <div className="osahan-card-body mt-3">
                      <h6 className="text-white mb-1">Pathway</h6>
                      <p className="m-0 text-white-50">
                        Free Now - Jun 25 at 08:30 PM
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="osahan-card">
                  <a href="store-single.html">
                    <img
                      className="img-fluid"
                      src="https://askbootstrap.com/preview/jarda/img/slider/2.png"
                      alt=""
                    />
                    <div className="bg-primary text-center p-1 text-white">
                      COUPON CODE - 2020COUPON
                    </div>
                    <div className="osahan-card-body mt-3">
                      <h6 className="text-white mb-1">AER Memories of Old</h6>
                      <p className="m-0 text-white-50">
                        Free Now - Jun 25 at 08:30 PM
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="osahan-card">
                  <a href="store-single.html">
                    <img
                      className="img-fluid"
                      src="https://askbootstrap.com/preview/jarda/img/slider/3.jpg"
                      alt=""
                    />
                    <div className="bg-primary text-center p-1 text-white">
                      COUPON CODE - 2020COUPON
                    </div>
                    <div className="osahan-card-body mt-3">
                      <h6 className="text-white mb-1">
                        Stranger Things 3: The Game
                      </h6>
                      <p className="m-0 text-white-50">
                        Free Now - Jun 25 at 08:30 PM
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="osahan-card">
                  <a href="store-single.html">
                    <img
                      className="img-fluid"
                      src="https://askbootstrap.com/preview/jarda/img/slider/5.jpg"
                      alt=""
                    />
                    <div className="bg-primary text-center p-1 text-white">
                      COUPON CODE - 2020COUPON
                    </div>
                    <div className="osahan-card-body mt-3">
                      <h6 className="text-white mb-1">Pathway</h6>
                      <p className="m-0 text-white-50">
                        Free Now - Jun 25 at 08:30 PM
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <GamePageSpecification />
        </div>
      </div>
    </div>
  );
};

export default GamePageItem;
