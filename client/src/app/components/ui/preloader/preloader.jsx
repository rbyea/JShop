import React from "react";
import styles from "./preloader.module.scss";

const Preloader = (props) => {
  return (
    <div className={styles.preloaderWrapper}>
      <div className={styles.pswpPreloaderIcn}>
        <div className={styles.pswpPreloaderCut}>
          <div className={styles.pswpPreloaderDonut}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
