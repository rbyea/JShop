import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoadingStatusGames,
  loadListGames
} from "../../../store/gamesSlice";
import PropTypes from "prop-types";
import {
  // getLoadingStatusCategories,
  loadListCategories
} from "../../../store/categoriesSlice";
import Preloader from "../preloader/preloader";
import {
  // getLoadingSliderStatus,
  loadSliderList
} from "../../../store/sliderSlice";
import { loadFeaturesList } from "../../../store/featuresSlice";
import { loadListSpecifications } from "../../../store/specificationSlice";
import { loadSliderCardList } from "../../../store/sliderCardSlice";
import {
  getCurrentUserId,
  getIsLoggedIn,
  // getLoadingUsersStatus,
  loadUsersList
} from "../../../store/usersSlice";
import { loadListBasket } from "../../../store/basketSlice";

const loaderDate = ({ children }) => {
  const dispatch = useDispatch();
  const loadingStatusGames = useSelector(getLoadingStatusGames());
  const isLoggedIn = useSelector(getIsLoggedIn());
  // const usersStatusLoading = useSelector(getLoadingUsersStatus());
  // const loadingStatusCategories = useSelector(getLoadingStatusCategories());
  // const loadingStatusSlider = useSelector(getLoadingSliderStatus());
  const currentUserId = useSelector(getCurrentUserId());

  React.useEffect(() => {
    dispatch(loadListGames());
    dispatch(loadListCategories());
    dispatch(loadSliderList());
    dispatch(loadFeaturesList());
    dispatch(loadListSpecifications());
    dispatch(loadSliderCardList());
  }, []);

  React.useEffect(() => {
    if (isLoggedIn) {
      dispatch(loadUsersList());
      dispatch(loadListBasket(currentUserId));
    }
  }, [isLoggedIn]);

  if (loadingStatusGames) {
    return <Preloader />;
  }
  return children;
};

loaderDate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default loaderDate;
