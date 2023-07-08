import { createSlice } from "@reduxjs/toolkit";
import gameService from "../services/games.services";
import { createSelector } from "reselect";

const initialState = {
  entities: null,
  isLoading: true,
  error: null
};

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    gamesRequested: (state) => {
      state.isLoading = true;
    },
    gamesFailed: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    gamesReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    }
  }
});

const { actions, reducer: gamesReducer } = gameSlice;

const { gamesRequested, gamesFailed, gamesReceived } = actions;

export const loadListGames = () => async (dispatch) => {
  dispatch(gamesRequested);
  try {
    const { content } = await gameService.get();
    dispatch(gamesReceived(content));
  } catch (error) {
    dispatch(gamesFailed(error.message));
  }
};

const getGames = (state) => state.games.entities;
const getGameId = (_, id) => id;

export const getListGames = () => (state) => state.games.entities;
export const getListGamesLength = () => (state) => state.games.entities.length;
export const getLoadingStatusGames = () => (state) => state.games.isLoading;
export const getTopSalesGames = createSelector([getGames], (games) => {
  return games ? games.filter((game) => game.topSales).slice(0, 4) : [];
});

export const getReceiptsGames = createSelector([getGames], (games) => {
  const currentTimestamp = Date.now();
  return games ? games.filter((game) => game.receipts > currentTimestamp) : [];
});

export const getGamePage = createSelector(
  [getGames, getGameId],
  (games, id) => {
    return games ? games.find((game) => game._id === id) : null;
  }
);

export default gamesReducer;
