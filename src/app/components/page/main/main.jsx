import React from "react";
import MainSlider from "../../common/mainSlider/mainSlider";
import GameList from "../../common/GameList/GameList";

const Main = (props) => {
  return (
    <>
      <MainSlider />
      <GameList title="Лидеры продаж" guid="leader" />
      <GameList title="Скоро в продаже" guid="new"/>
    </>
  );
};

export default Main;
