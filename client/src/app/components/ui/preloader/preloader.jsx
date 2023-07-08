import React from "react";
import "./preloader.css";

const Preloader = (props) => {
  return (
    <div className="preloader-wrapper">
      <div className="pswp__preloader__icn">
        <div className="pswp__preloader__cut">
          <div className="pswp__preloader__donut"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
