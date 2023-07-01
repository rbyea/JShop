import React from "react";

const GamePageItem = (props) => {
  return (
    <div className="col-lg-9">
      <div className="row">
        <div className="col-lg-12">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="osahan-slider">
                  <div className="bg-dark">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <img
                          className="img-fluid"
                          src="https://askbootstrap.com/preview/jarda/img/slider/5.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="osahan-slider">
                  <div className="bg-dark">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <img
                          className="img-fluid"
                          src="https://askbootstrap.com/preview/jarda/img/slider/6.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="osahan-slider">
                  <div className="bg-dark">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <img
                          className="img-fluid"
                          src="https://askbootstrap.com/preview/jarda/img/slider/7.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="pt-4" id="about"></div>
          <h5 className="mb-3 mt-4">Об игре</h5>
          <div className="p-5 bg-dark">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="list-icon mb-3">
                  <p className="text-white-50 mb-1">Developer</p>
                  <p className="text-white">ABC Games</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="list-icon mb-3">
                  <p className="text-white-50 mb-1">Publisher</p>
                  <p className="text-white">XYZ Games</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="list-icon mb-3">
                  <p className="text-white-50 mb-1">Release Date</p>
                  <p className="text-white">Jul 25, 2020</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="list-icon mb-3">
                  <p className="text-white-50 mb-1">Tags</p>
                  <p className="text-white">
                    Shooter, Multiplayer, Single Player
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="list-icon mb-3">
                  <p className="text-white-50 mb-1">Rating</p>
                  <p className="text-white">TEEN</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="list-icon mb-3">
                  <p className="text-white-50 mb-1">Platform</p>
                  <p className="text-white">Windows, Mac</p>
                </div>
              </div>
            </div>
            <hr />
            <p className="mt-4">Fortnite Season 3 - Dive In</p>
            <p className="text-white-50 mb-0">
              Battle. Build. Create. Fortnite is the free, always evolving,
              multiplayer game where you and your friends battle to be the last
              one standing or collaborate to create your dream Fortnite world.
              Play both Battle Royale and Fortnite Creative for FREE. Download
              now and jump into the action. This download also gives you a path
              to purchase the Save the World co-op PvE campaign during early
              access.
            </p>
          </div>
          <div className="pt-4" id="video"></div>
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
          <div className="pt-4" id="offers"></div>
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
          <div className="pt-4" id="specifications"></div>
          <h5 className="mb-3 mt-4">Характеристики</h5>
          <div className="p-5 bg-dark specifications">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  WINDOWS
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  MAC OS
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="list-icon mb-3">
                      <p className="text-white-50 mb-1">OS</p>
                      <p className="text-white">Windows 7/8/10 64-bit</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="list-icon mb-3">
                      <p className="text-white-50 mb-1">CPU</p>
                      <p className="text-white">Core i3 3.3 GHz</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="list-icon mb-3">
                      <p className="text-white-50 mb-1">Memory</p>
                      <p className="text-white">4GB RAM</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="list-icon mb-3">
                      <p className="text-white-50 mb-1">GPU</p>
                      <p className="text-white">Intel HD 4000</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="list-icon mb-3">
                      <p className="text-white-50 mb-1">CPU (Recommended)</p>
                      <p className="text-white">Core i5 3.5 GHz</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="list-icon mb-3">
                      <p className="text-white-50 mb-1">Memory (Recommended)</p>
                      <p className="text-white">8GB RAM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="list-icon mb-3">
                      <p className="text-white-50 mb-1">OS</p>
                      <p className="text-white">Mac OSX Mojave (10.14.6+)</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="list-icon mb-3">
                      <p className="text-white-50 mb-1">CPU</p>
                      <p className="text-white">Core i3 3.3 GHz</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="list-icon mb-3">
                      <p className="text-white-50 mb-1">Memory</p>
                      <p className="text-white">4GB RAM</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="list-icon mb-3">
                      <p className="text-white-50 mb-1">GPU</p>
                      <p className="text-white">Intel Iris Pro 5200</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="list-icon mb-3">
                      <p className="text-white-50 mb-1">CPU (Recommended)</p>
                      <p className="text-white">Core i5 3.5 GHz</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="list-icon mb-3">
                      <p className="text-white-50 mb-1">Memory (Recommended)</p>
                      <p className="text-white">8GB RAM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <p className="text-white-50 mt-4 mb-0">
              © 2020, Apicgames Games, Inc. Apicgames, Apicgames Games, the
              Apicgames Games logo, Fortnite, the Fortnite logo, Unreal, Unreal
              Engine 4 and UE4 are trademarks or registered trademarks of
              Apicgames Games, Inc. in the United States of America and
              elsewhere. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePageItem;
