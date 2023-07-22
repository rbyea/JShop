import React from "react";
import GamePageArticle from "../common/GamePage/GamePageArticle";
import GamePageItem from "../common/GamePage/GamePageItem";
import { windowScroll } from "../../utils/windowScroll";
import { loadListSpecifications } from "../../store/specificationSlice";
import { loadSliderCardList } from "../../store/sliderCardSlice";
import { useDispatch } from "react-redux";

const Card = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    windowScroll();
    dispatch(loadListSpecifications());
    dispatch(loadSliderCardList());
  }, []);
  return (
    <>
      <section className="py-5 store-single-page">
        <div className="container">
          <div className="row">
            <GamePageArticle />

            <GamePageItem />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
