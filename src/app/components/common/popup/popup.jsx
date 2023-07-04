import React from "react";
import Button from "../../ui/button";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { searchGameInBasket } from "../../../store/basketSlice";

const Popup = ({ title, gameObj, visibleModal, setVisibleModal }) => {
  const handleClose = (e) => {
    setVisibleModal(false);
  };

  const findGame = useSelector(searchGameInBasket(gameObj._id));

  React.useEffect(() => {
    console.log(findGame.count);
  }, []);

  return (
    <div className={`modal ${visibleModal ? "show" : ""}`} id="exampleModal">
      <div className="modal-dialog">
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              onClick={handleClose}
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            {findGame.count === 1 ? (
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item flex-fill">
                  {" "}
                  <img src={gameObj.picture} height={150} alt="" />
                </li>
                <li className="list-group-item flex-fill ">{gameObj.title}</li>
                <li className="list-group-item flex-fill">{gameObj.price}</li>
              </ul>
            ) : (
              "Товар уже добавлен"
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
              data-dismiss="modal"
            >
              Закрыть
            </button>

            <Button
              closeModal={handleClose}
              link="/basket"
              name="btn-primary"
              title="Перейти в корзину"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  visibleModal: PropTypes.bool.isRequired,
  setVisibleModal: PropTypes.func,
  title: PropTypes.string,
  gameObj: PropTypes.object
};

export default Popup;
