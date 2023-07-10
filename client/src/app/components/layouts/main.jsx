import React from "react";
import MainSlider from "../common/Sliders/MainSlider";
import GameList from "../common/GameList/GameList";
import { windowScroll } from "../../utils/windowScroll";

const Main = (props) => {
  React.useEffect(() => {
    windowScroll();
  }, []);
  return (
    <>
      <MainSlider />
      <GameList title="Лидеры продаж" guid="leader" />
      <GameList title="Скоро в продаже" guid="new" />
    </>
  );
};

export default Main;
