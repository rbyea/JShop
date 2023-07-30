import React from "react";
import MainSlider from "../common/sliders/mainSlider";
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
    </>
  );
};

export default Main;
