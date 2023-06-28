import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";
import sliderReducer from "./sliderSlice";
import categoriesReducer from "./categoriesSlice";
import featuresReducer from "./featuresSlice";

const rootReducer = combineReducers({
  games: gamesReducer,
  slider: sliderReducer,
  categories: categoriesReducer,
  features: featuresReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
