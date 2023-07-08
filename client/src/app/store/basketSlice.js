import { createSlice } from "@reduxjs/toolkit";
import { discountFunc } from "../utils/discountFunc";

const initialState = {
  entities: JSON.parse(localStorage.getItem("basketGames")) || [],
  totalPrice: JSON.parse(localStorage.getItem("basketTotalPrice")) || 0
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setAddGame: (state, action) => {
      const countItems = state.entities.find(
        (obj) => obj.gameId === action.payload.gameId
      );

      if (!countItems) {
        state.entities.push({
          ...action.payload,
          count: 1
        });
      }

      state.totalPrice = state.entities.reduce((sum, obj) => {
        const discountGame = obj.price - discountFunc(obj.price, obj.discount);
        return discountGame * 1 + sum;
      }, 0);
    },
    increment: (state, action) => {
      const countGame = state.entities.find(
        (obj) => obj.gameId === action.payload
      );
      if (countGame) {
        countGame.count++;
      }

      state.totalPrice = state.entities.reduce((sum, obj) => {
        const discountGame = obj.price - discountFunc(obj.price, obj.discount);
        return discountGame * obj.count + sum;
      }, 0);
    },
    decrement: (state, action) => {
      const countGame = state.entities.find(
        (obj) => obj.gameId === action.payload
      );
      if (countGame) {
        countGame.count--;
      }
      state.totalPrice = state.entities.reduce((sum, obj) => {
        const discountGame = obj.price - discountFunc(obj.price, obj.discount);
        return discountGame * obj.count + sum;
      }, 0);
    },
    remove: (state, action) => {
      state.entities = state.entities.filter(
        (game) => game.gameId !== action.payload
      );
      state.totalPrice = state.entities.reduce((sum, obj) => {
        const discountGame = obj.price - discountFunc(obj.price, obj.discount);
        return discountGame * obj.count + sum;
      }, 0);
    },
    clear: (state) => {
      state.entities = [];
      state.totalPrice = 0;
    }
  }
});

const { actions, reducer: basketReducer } = basketSlice;

const { setAddGame, increment, decrement, remove, clear } = actions;

export const addGameInBasket = (obj) => (dispatch) => {
  dispatch(setAddGame(obj));
};

export const incrementGame = (gameId) => (dispatch) => {
  dispatch(increment(gameId));
};

export const decrementGame = (gameId) => (dispatch) => {
  dispatch(decrement(gameId));
};

export const removeGame = (gameId) => (dispatch) => {
  dispatch(remove(gameId));
};

export const basketClear = () => (dispatch) => {
  dispatch(clear());
};

export const getListBasket = () => (state) => state.basket.entities;
export const getLengthBasket = () => (state) => state.basket.entities.length;

export const searchGameInBasket = (id) => (state) => {
  return state.basket.entities.find((game) => game.gameId === id);
};

export const getTotalPrice = () => (state) => state.basket.totalPrice;

export default basketReducer;
