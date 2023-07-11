import React from "react";
import { getGamePage } from "../../../store/gamesSlice";
import {
  addGameInBasket,
  searchGameInBasket
} from "../../../store/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Popup from "../../ui/Popup/Popup";
import styles from "./gamePage.module.scss";
import {
  FaRegHeart,
  FaShoppingBasket,
  FaHome,
  FaVideo,
  FaAward,
  FaEdit
} from "react-icons/fa";
import { getIsLoggedIn } from "../../../store/usersSlice";
import { toast } from "react-toastify";
import { getLocalIdKey } from "../../../services/localStorage.service";
import { nanoid } from "nanoid";
import Price from "../../ui/price";
import { createFavorite } from "../../../store/favoriteSlice";

const GamePageArticle = () => {
  const dispatch = useDispatch();
  const { gameId } = useParams();

  const searchGameBasket = useSelector(searchGameInBasket(gameId));
  const isLoggetIn = useSelector(getIsLoggedIn());

  const gamePage = useSelector((state) => getGamePage(state, gameId));
  const [activeNavbarLink, setActiveNavbarLink] = React.useState("");
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [visibleContent, setVisibleContent] = React.useState(false);

  const navLinks = [
    { name: "Об игре", icon: FaHome, href: "#about" },
    { name: "Видео", icon: FaVideo, href: "#video" },
    { name: "Похожие игры", icon: FaAward, href: "#offers" },
    { name: "Характеристики", icon: FaEdit, href: "#specifications" }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const cardSections = document.querySelectorAll(".section-card");

      cardSections.forEach((section) => {
        const { top, height } = section.getBoundingClientRect();

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveNavbarLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addGameFavorite = (e) => {
    e.preventDefault();
    if (isLoggetIn) {
      const initialItem = {
        _id: nanoid(),
        gameId: gamePage._id,
        userId: getLocalIdKey(),
        discount: gamePage.discount,
        title: gamePage.title,
        price: gamePage.price,
        picture: gamePage.picture
      };

      console.log(initialItem);

      dispatch(createFavorite(initialItem));
      toast.success("Игра добавлена в избранное!", {
        autoClose: 3000,
        theme: "dark"
      });
    }
  };

  const addGameBasket = (e) => {
    e.preventDefault();
    if (isLoggetIn) {
      if (!searchGameBasket) {
        const initialItem = {
          _id: nanoid(),
          gameId: gamePage._id,
          userId: getLocalIdKey(),
          discount: gamePage.discount,
          title: gamePage.title,
          price: gamePage.price,
          picture: gamePage.picture,
          count: 1
        };

        dispatch(addGameInBasket(initialItem));
        setVisibleModal(true);
      } else {
        setVisibleModal(true);
        setVisibleContent(true);
      }
    } else {
      toast.error("Войдите, что бы купить игру!", {
        autoClose: 3000,
        theme: "dark"
      });
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
          <div className={styles.priceWrapper}>
            <Price discount={gamePage.discount} price={gamePage.price} />
          </div>

          <div className="d-flex mb-4">
            <a
              href="#"
              onClick={(e) => addGameFavorite(e)}
              className="btn btn-danger col-8"
            >
              <span className={styles.btnWrapper}>
                <i className="feather-heart mr-1">
                  <FaRegHeart />
                </i>{" "}
                Избранное
              </span>
            </a>
            <a
              href="#"
              onClick={(e) => addGameBasket(e)}
              className="btn btn-warning col-4 px-2"
            >
              <span className={styles.btnWrapper}>
                <i className="feather-download-cloud mr-1">
                  <FaShoppingBasket />
                </i>{" "}
                Купить
              </span>
            </a>
          </div>
          <div className="bg-dark p-3 sidebar-widget mb-4">
            <div className="nav nav-pills flex-column lavalamp">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    className={`nav-link ${
                      activeNavbarLink === link.href.substring(1)
                        ? "active"
                        : ""
                    } `}
                    href={link.href}
                  >
                    <Icon className="mr-1" /> {link.name}
                  </a>
                );
              })}
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
