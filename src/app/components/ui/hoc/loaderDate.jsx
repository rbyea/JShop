import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoadingStatusGames,
  loadListGames
} from "../../../store/gamesSlice";
import PropTypes from "prop-types";
import {
  getLoadingStatusCategories,
  loadListCategories
} from "../../../store/categoriesSlice";
import Preloader from "../preloader/preloader";
import {
  getLoadingSliderStatus,
  loadSliderList
} from "../../../store/sliderSlice";

const loaderDate = ({ children }) => {
  const dispatch = useDispatch();
  const loadingStatusGames = useSelector(getLoadingStatusGames());
  const loadingStatusCategories = useSelector(getLoadingStatusCategories());
  const loadingStatusSlider = useSelector(getLoadingSliderStatus());

  React.useEffect(() => {
    if (loadingStatusGames) {
      dispatch(loadListGames());
    }
    if (loadingStatusCategories) {
      dispatch(loadListCategories());
    }
    if (loadingStatusSlider) {
      dispatch(loadSliderList());
    }
  }, []);

  if (loadingStatusGames) return <Preloader />;
  return children;
};

loaderDate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default loaderDate;
