import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: JSON.parse(localStorage.getItem("basketGames")) || [],
  totalPrice: 0
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setAddGame: (state, action) => {
      const countItems = state.entities.find(
        (obj) => obj.gameId === action.payload.gameId
      );

      if (countItems) {
        countItems.count++;
      } else {
        state.entities.push({
          ...action.payload,
          count: 1
        });
      }

      state.totalPrice = state.entities.reduce((sum, obj) => {
        return obj.price * 1 + sum;
      }, 0);
    }
  }
});

const { actions, reducer: basketReducer } = basketSlice;

const { setAddGame } = actions;

export const addGameInBasket = (obj) => (dispatch) => {
  dispatch(setAddGame(obj));
};

export const getListBasket = () => (state) => state.basket.entities;
export const getLengthBasket = () => (state) => state.basket.entities.length;

export const searchGameInBasket = (id) => (state) => {
  return state.basket.entities.find((game) => game.gameId === id);
};

export default basketReducer;
