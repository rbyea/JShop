import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";
import sliderReducer from "./sliderSlice";
import categoriesReducer from "./categoriesSlice";
import featuresReducer from "./featuresSlice";
import specificationReducer from "./specificationSlice";
import sliderCardReducer from "./sliderCardSlice";
import basketReducer from "./basketSlice";
import usersReducer from "./usersSlice";

const rootReducer = combineReducers({
  games: gamesReducer,
  slider: sliderReducer,
  categories: categoriesReducer,
  features: featuresReducer,
  specifications: specificationReducer,
  sliderCard: sliderCardReducer,
  basket: basketReducer,
  users: usersReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
