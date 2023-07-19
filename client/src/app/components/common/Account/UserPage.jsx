import React from "react";
import { useSelector } from "react-redux";
import { getListPayment } from "../../../store/paymentSlice";
import styles from "./account.module.scss";

const UserPage = (props) => {
  const paymentList = useSelector(getListPayment());

  return (
    <div className="card">
      <div className="card-body">
        {paymentList.length === 0 ? (
          <h5 className="card-title mb-0">Вы еще не совершали покупок</h5>
        ) : (
          <>
            <h5 className="card-title mb-2">Ваши заказы:</h5>
            <div className="wrapper-collumn">
              {paymentList.map((payment) => (
                <div key={payment._id} className={styles.paymentList}>
                  <div className={styles.paymentNumber}>
                    Номер заказа:
                    <span className={styles.paymentColor}>#{payment._id}</span>
                  </div>
                  <div className={styles.underWrap}>
                    <div className={styles.totalPrice}>
                      Сумма заказа:
                      <span className={styles.paymentColor}>
                        {payment.totalPrice}р.
                      </span>
                    </div>
                    <div className={styles.paymentStatus}>
                      Статус заказа:
                      <span className={styles.paymentColor}>ожидание</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserPage;
