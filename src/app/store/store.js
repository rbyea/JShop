import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";
import sliderReducer from "./sliderSlice";
import categoriesReducer from "./categoriesSlice";

const rootReducer = combineReducers({
  games: gamesReducer,
  slider: sliderReducer,
  categories: categoriesReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
