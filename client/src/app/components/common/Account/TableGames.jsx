import React from "react";
import styles from "./account.module.scss";
import { FaRegEdit, FaWindowClose } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getListGames } from "../../../store/gamesSlice";
import { Link } from "react-router-dom";
import PopupGame from "../../ui/Popup/PopupGame";
const TableGames = (props) => {
  const tableList = useSelector(getListGames());

  const [visibleModal, setVisibleModal] = React.useState(false);
  const [gameId, setGameId] = React.useState();

  const handleEdit = (gameId) => {
    setGameId(gameId);
    setVisibleModal(true);
  };

  return (
    <div className="col-lg-9">
      {visibleModal && (
        <PopupGame
          setVisibleModal={setVisibleModal}
          visibleModal={visibleModal}
          gameId={gameId}
        />
      )}
      <div className="d-flex align-item-center title mb-3">
        <h5 className="m-0 font-weight-normal">Таблица игр</h5>
      </div>
      {tableList ? (
        <>
          <div className={styles.tableCollumn}>
            {tableList.map((game) => (
              <div key={game._id} className={styles.gameList}>
                <div className={styles.gameLeft}>
                  <Link to={`/card/${game._id}`} className={styles.gameImage}>
                    <img src={game.picture} alt="" />
                  </Link>
                  <Link to={`/card/${game._id}`} className={styles.gameTitle}>
                    {game.title}
                  </Link>
                </div>
                <div className={styles.gameWrap}>
                  <button
                    onClick={() => handleEdit(game._id)}
                    className="btn btn-light"
                  >
                    <FaRegEdit />
                  </button>
                  <button className="btn btn-danger">
                    <FaWindowClose />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        "Товаров нет"
      )}
    </div>
  );
};

export default TableGames;
