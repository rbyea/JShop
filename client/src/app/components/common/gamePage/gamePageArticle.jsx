import React from "react";
import { getGamePage } from "../../../store/gamesSlice";
import {
  addGameInBasket,
  searchGameInBasket
} from "../../../store/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Popup from "../../ui/Popup/Popup";

const GamePageArticle = () => {
  const dispatch = useDispatch();
  const { gameId } = useParams();

  const searchGameBasket = useSelector(searchGameInBasket(gameId));

  const gamePage = useSelector((state) => getGamePage(state, gameId));
  const [activeNavbarLink, setActiveNavbarLink] = React.useState("");
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [visibleContent, setVisibleContent] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const cardSections = document.querySelectorAll(".section-card");

      cardSections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveNavbarLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addGame = () => {
    if (!searchGameBasket) {
      const initialItem = {
        gameId: gamePage._id,
        discount: gamePage.discount,
        title: gamePage.title,
        price: gamePage.price,
        picture: gamePage.picture
      };
      dispatch(addGameInBasket(initialItem));
      setVisibleModal(true);
    } else {
      setVisibleModal(true);
      setVisibleContent(true);
    }
  };

  return (
    <>
      <div className="col-lg-3">
        <div className="position-sticky">
          <div className=" mb-1">
            <img className="img-fluid" src={gamePage.picture} alt="" />
          </div>
          <h3 className="mt-4 mb-3">{gamePage.title}</h3>
          <div className="d-flex mb-4">
            <div className="btn btn-danger col-8">
              <i className="feather-heart mr-1"></i> Избранное
            </div>
            <a
              href="#"
              onClick={addGame}
              className="btn btn-warning col-4 px-2"
            >
              <i className="feather-download-cloud mr-1"></i> Купить
            </a>
          </div>
          <div className="bg-dark p-3 sidebar-widget mb-4">
            <div className="nav nav-pills flex-column lavalamp">
              <a
                className={`nav-link ${
                  activeNavbarLink === "about" ? "active" : ""
                } `}
                href="#about"
              >
                <i className="feather-home mr-1"></i> Об игре
              </a>
              <a
                className={`nav-link ${
                  activeNavbarLink === "video" ? "active" : ""
                } `}
                href="#video"
              >
                <i className="feather-video mr-1"></i>Видео
              </a>
              <a
                className={`nav-link ${
                  activeNavbarLink === "offers" ? "active" : ""
                } `}
                href="#offers"
              >
                <i className="feather-award mr-1"></i> Похожие игры
              </a>
              <a
                className={`nav-link ${
                  activeNavbarLink === "specifications" ? "active" : ""
                } `}
                href="#specifications"
              >
                <i className="feather-edit mr-1"></i> Характеристики
              </a>
            </div>
          </div>
        </div>
      </div>
      {visibleModal && (
        <Popup
          title="Товар добавлен в корзину!"
          visibleDescription={visibleContent}
          gameObj={gamePage}
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
        />
      )}
    </>
  );
};

export default GamePageArticle;
