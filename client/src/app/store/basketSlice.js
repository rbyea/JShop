import { createSlice } from "@reduxjs/toolkit";
import { discountFunc } from "../utils/discountFunc";
import basketService from "../services/basket.service";

const initialState = {
  entities: JSON.parse(localStorage.getItem("basketGames")) || [],
  totalPrice: JSON.parse(localStorage.getItem("basketTotalPrice")) || 0,
  isLoading: true,
  error: null
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    basketRequested: (state) => {
      state.isLoading = true;
    },
    basketRequestFailed: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
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
      state.isLoading = false;
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
      state.isLoading = false;
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
      state.isLoading = false;
    },
    remove: (state, action) => {
      state.entities = state.entities.filter(
        (game) => game.gameId !== action.payload
      );
      state.totalPrice = state.entities.reduce((sum, obj) => {
        const discountGame = obj.price - discountFunc(obj.price, obj.discount);
        return discountGame * obj.count + sum;
      }, 0);
      state.isLoading = false;
    },
    clear: (state) => {
      state.entities = [];
      state.totalPrice = 0;
      state.isLoading = false;
    }
  }
});

const { actions, reducer: basketReducer } = basketSlice;

const {
  setAddGame,
  increment,
  decrement,
  remove,
  clear,
  basketRequested,
  basketRequestFailed
} = actions;

export const addGameInBasket = (obj) => async (dispatch) => {
  dispatch(basketRequested());
  try {
    const { content } = await basketService.create(obj);
    console.log(content);
    dispatch(setAddGame(content));
  } catch (error) {
    dispatch(basketRequestFailed(error.message));
  }
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
