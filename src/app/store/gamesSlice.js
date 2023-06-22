import { createSlice } from "@reduxjs/toolkit";
import gameService from "../services/games.services";
import { isOutDated } from "../utils/isOutDate";

const initialState = {
  entities: null,
  isLoading: true,
  error: null,
  lastFetch: null
};

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    gamesRequested: (state) => {
      state.isLoading = false;
    },
    gamesFailed: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    gamesReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.lastFetch = Date.now();
    }
  }
});

const { actions, reducer: gamesReducer } = gameSlice;

const { gamesRequested, gamesFailed, gamesReceived } = actions;

export const loadListGames = () => async (dispatch, getState) => {
  const { lastFetch } = getState().games;
  if (isOutDated(lastFetch)) {
    dispatch(gamesRequested);
    try {
      const { content } = await gameService.get();
      dispatch(gamesReceived(content));
    } catch (error) {
      dispatch(gamesFailed(error.message));
    }
  }
};

export const getListGames = () => (state) => state.games.entities;
export const getLoadingStatusGames = () => (state) => state.games.isLoading;
export const getTopSalesGames = () => (state) => {
  const filterState = state.games.entities.filter(
    (game) => game.topSales === true
  );
  return filterState.slice(0, 4);
};

export default gamesReducer;
