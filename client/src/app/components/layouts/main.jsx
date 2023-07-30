import React from "react";
import { windowScroll } from "../../utils/windowScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/effect-fade";
import { useSelector } from "react-redux";
import { getLoadingSliderStatus, getSliderList } from "../../store/sliderSlice";
import { getLoadingStatusCategories } from "../../store/categoriesSlice";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import SliderCard from "../common/sliders/sliderItem";
import Button from "../ui/button";
import { getTopSalesGames } from "../../store/gamesSlice";
import { discountFunc } from "../../utils/discountFunc";
import { Link } from "react-router-dom";

const Main = (props) => {
  React.useEffect(() => {
    windowScroll();
  }, []);

  const sliderRef = React.useRef(null);
  const sliderList = useSelector(getSliderList());
  const sliderLoadingStatus = useSelector(getLoadingSliderStatus());
  const isLoadingCategories = useSelector(getLoadingStatusCategories());

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const [data, setData] = React.useState([]);

  const topSalesGames = useSelector(getTopSalesGames);

  React.useEffect(() => {
    setData(topSalesGames);
  }, []);

  return (
    <>
      <>
        {!sliderLoadingStatus && !isLoadingCategories && (
          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-slider">
                    <Swiper
                      ref={sliderRef}
                      effect={"fade"}
                      loop={true}
                      modules={[EffectFade]}
                      spaceBetween={10}
                      slidesPerView={1}
                    >
                      {sliderList.map((slide) => (
                        <SwiperSlide key={slide._id}>
                          <SliderCard {...slide} />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {sliderList.length > 1 && (
                      <>
                        <div
                          onClick={handlePrev}
                          className="carousel-pointer carousel-control-prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          >
                            <FaArrowLeft />
                          </span>
                        </div>
                        <div
                          onClick={handleNext}
                          className="carousel-pointer carousel-control-next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          >
                            <FaArrowRight />
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
      <section className="pb-5">
        <div className="container">
          <div className="d-flex align-item-center title mb-3">
            <h5 className="m-0 font-weight-normal">Лидеры продаж</h5>
            <Button
              link="catalog/"
              title="Смотреть все"
              name="btn-sm btn-outline-light ml-auto"
            />
          </div>
          <div className="row">
            {data.map((game) => (
              <div key={game._id} className="col-lg-3 col-md-6">
                <div className="osahan-card">
                  <Link to={`/card/${game._id}`}>
                    <div className="osahan-card__image">
                      <img className="img-fluid" src={game.picture} alt="" />
                    </div>
                    <div className="osahan-card-body mt-3">
                      <h6 className="text-white mb-1">{game.title}</h6>
                      {data && <p className="mb-0 text-white-50">{data}</p>}
                      {game.price && game.discount && (
                        <div className="price mt-3">
                          {Number(game.discount) !== 0 && (
                            <>
                              <div
                                className={`${
                                  Number(game.discount) > 20
                                    ? "bg-danger"
                                    : "bg-primary"
                                }  d-inline-block text-center px-2 py-1 text-white`}
                              >
                                -{game.discount}%
                              </div>
                              <del className="text-white-50 mx-1">
                                {game.price} руб.
                              </del>
                            </>
                          )}

                          <span className="text-white">
                            {game.price -
                              discountFunc(game.price, game.discount)}
                            руб.
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              </div>

              // <GameListCard key={game._id} {...game} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
