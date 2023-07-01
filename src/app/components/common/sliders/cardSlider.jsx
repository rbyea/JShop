import React from "react";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

// css
import "swiper/swiper.min.css";
import "swiper/css/effect-fade";

const CardSlider = (props) => {
  const sliderRef = React.useRef(null);
  const sliderList = useSelector(getSliderList());
  const sliderLoadingStatus = useSelector(getLoadingSliderStatus());
  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <Swiper
        ref={sliderRef}
        effect={"fade"}
        loop={true}
        modules={[EffectFade]}
        spaceBetween={10}
        slidesPerView={1}
      >
      <SwiperSlide key={slide._id}>
        <SliderCard {...slide} />
      </SwiperSlide>
      </Swiper>
      <div
        onClick={handlePrev}
        className="carousel-pointer carousel-control-prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Пред.</span>
      </div>
      <div
        onClick={handleNext}
        className="carousel-pointer carousel-control-next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">След.</span>
      </div>
    </>
  );
};

export default CardSlider;
